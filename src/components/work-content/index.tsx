import {
  addWorkContent,
  deleteWorkContent,
  listWorkContent,
  sortOrder,
} from '@/services/work-content';
import {
  EditOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { ActionType, ProList } from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { history } from '@umijs/max';
import { useParams } from '@umijs/max';
import { useEffect, useRef, useState } from 'react';
import AddComponent from '../add-component';

type WorkContentComponentProps = {
  child: boolean;
};

const WorkContentComponent: React.FC<WorkContentComponentProps> = (props) => {
  const { id } = useParams();

  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    actionRef.current?.reload();
  }, [id]);

  const onConfirm = async (workContentId: string) => {
    const response = await deleteWorkContent(workContentId, id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    }
  };

  const handleSortOrder = async (values: API.WorkItem, up: boolean) => {
    values.sortOrder = up ? values.sortOrder - 1 : values.sortOrder + 1;
    const response = await sortOrder(
      values.id,
      values.catalogId,
      values.sortOrder,
    );
    if (response.succeeded) {
      message.success('Sorted!');
      actionRef.current?.reload();
    }
  };

  const onFinish = async (value: any) => {
    value.catalogId = id;
    const response = await addWorkContent(value);
    if (response.succeeded) {
      message.success('Added!');
      setVisible(false);
      actionRef.current?.reload();
    }
  };

  return (
    <div>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        icon={<PlusOutlined />}
      >
        Add component
      </Button>
      <ProList<API.WorkItem>
        actionRef={actionRef}
        request={async () => listWorkContent(id, props.child)}
        header={false}
        metas={{
          title: {
            dataIndex: 'name',
          },
          actions: {
            render: (text, row) => [
              <Button
                key={1}
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  history.push(
                    `/works/${row.normalizedName.toLocaleLowerCase()}/${
                      row.id
                    }`,
                  );
                }}
              />,
              <Button
                key={2}
                icon={<ArrowUpOutlined />}
                onClick={() => handleSortOrder(row, true)}
              ></Button>,
              <Button
                key={3}
                icon={<ArrowDownOutlined />}
                onClick={() => handleSortOrder(row, false)}
              ></Button>,
              <Popconfirm
                title="Are you sure?"
                key={4}
                onConfirm={() => onConfirm(row.id)}
              >
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  type="primary"
                ></Button>
                ,
              </Popconfirm>,
            ],
          },
        }}
      />
      <AddComponent
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onFinish}
      />
    </div>
  );
};

export default WorkContentComponent;
