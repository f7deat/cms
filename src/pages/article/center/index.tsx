import AddComponent from '@/components/add-component';
import { activeCatalog, getCatalog } from '@/services/catalog';
import {
  addWorkContent,
  deleteWorkContent,
  listWorkContent,
} from '@/services/work-content';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  BarsOutlined,
} from '@ant-design/icons';
import { ActionType, PageContainer, ProList } from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import { Button, Dropdown, MenuProps, message, Popconfirm } from 'antd';
import { useEffect, useRef, useState } from 'react';

const ArticleCenter: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState<boolean>(false);
  const [catalog, setCatalog] = useState<API.Catalog>();

  useEffect(() => {
    getCatalog(id).then((response) => {
      setCatalog(response);
    });
  }, []);

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

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a
          onClick={() =>
            history.push(
              `${localStorage.getItem('wf_URL')}article/${
                catalog?.normalizedName
              }`,
            )
          }
        >
          <FormattedMessage id="general.preview" />
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          onClick={async () => {
            const response = await activeCatalog(id);
            if (response.succeeded) {
              message.success('Saved!');
            }
          }}
        >
          Xuất bản
        </a>
      ),
    },
    {
      key: '3',
      label: <a>Xóa</a>,
      danger: true,
    },
  ];

  return (
    <PageContainer
      title={catalog?.name}
      extra={
        <Dropdown menu={{ items }}>
          <Button icon={<BarsOutlined />}></Button>
        </Dropdown>
      }
    >
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
    </PageContainer>
  );
};

export default ArticleCenter;
