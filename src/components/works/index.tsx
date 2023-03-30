import {
  addItem,
  addWorkContent,
  deleteWorkContent,
  listWork,
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
import {
  ActionType,
  ModalForm,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { FormattedMessage, history } from '@umijs/max';
import { useParams } from '@umijs/max';
import { useEffect, useRef, useState } from 'react';
import AddComponent from '../add-component';

const WorkContentComponent: React.FC = () => {
  const { id } = useParams();

  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<any>();

  useEffect(() => {
    actionRef.current?.reload();
  }, [id]);

  const onConfirm = async (workContentId: string) => {
    const response = await deleteWorkContent(workContentId, id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const handleSortOrder = async (values: Entity.WorkItem) => {
    const response = await sortOrder(values);
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

  const onSelect = async () => {
    const response = await listWork();
    setOptions(response);
    setOpen(true);
  };

  const addWorkItem = async (values: API.WorkItem) => {
    const response = await addItem(values);
    if (response.succeeded) {
      message.success('Saved');
      setOpen(false);
      actionRef.current?.reload();
    }
  };

  return (
    <div>
      <ProList<API.WorkItem>
        toolBarRender={() => {
          return [
            <Button
              key={0}
              onClick={() => setVisible(true)}
              type="primary"
              icon={<PlusOutlined />}
            >
              <FormattedMessage id="general.new" />
            </Button>,
            <Button key={1} onClick={onSelect}>
              Select
            </Button>,
          ];
        }}
        rowSelection={{}}
        actionRef={actionRef}
        request={async () => listWorkContent(id)}
        headerTitle="Work items"
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
                onClick={() =>
                  handleSortOrder({
                    workId: row.id,
                    catalogId: id,
                    sortOrder: row.sortOrder - 1,
                  })
                }
              ></Button>,
              <Button
                key={3}
                icon={<ArrowDownOutlined />}
                onClick={() =>
                  handleSortOrder({
                    workId: row.id,
                    catalogId: id,
                    sortOrder: row.sortOrder + 1,
                  })
                }
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
        open={visible}
        onOpenChange={setVisible}
        onFinish={onFinish}
      />
      <ModalForm open={open} onOpenChange={setOpen} onFinish={addWorkItem}>
        <ProFormText name="catalogId" initialValue={id} hidden />
        <ProFormSelect
          showSearch
          name="workContentId"
          options={options}
          label="Work"
        />
      </ModalForm>
    </div>
  );
};

export default WorkContentComponent;
