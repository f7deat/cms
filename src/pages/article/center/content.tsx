import AddComponent from '@/components/add-component';
import {
  addWorkContent,
  deleteWorkContent,
  listWorkContent,
} from '@/services/work-content';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ActionType, ProList } from '@ant-design/pro-components';
import { FormattedMessage, useParams, history } from '@umijs/max';
import { message, Button, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const ArticleContent: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();

  const [open, setOpen] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    values.catalogId = id;
    const response = await addWorkContent(values);
    if (response.succeeded) {
      message.success('Added!');
      setOpen(false);
      actionRef.current?.reload();
    }
  };

  const onConfirm = async (workContentId: string) => {
    const response = await deleteWorkContent(workContentId, id);
    if (response.succeeded) {
      message.success('Deleted!');
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
              onClick={() => setOpen(true)}
              type="primary"
              icon={<PlusOutlined />}
            >
              <FormattedMessage id="general.new" />
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
      <AddComponent open={open} onOpenChange={setOpen} onFinish={onFinish} />
    </div>
  );
};

export default ArticleContent;
