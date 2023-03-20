import { CatalogType } from '@/constants';
import NewCatalog from '@/pages/catalog/new';
import { addCatalog, deleteCatalog, listCatalog } from '@/services/catalog';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, history } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const ArticleList: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();

  const onFinish = async (values: any) => {
    const response = await addCatalog(values);
    if (response.succeeded) {
      setOpen(false);
      history.push(`/article/center/${response.data.id}`);
    } else {
      message.error(response.errors[0].description);
    }
  };

  const onConfirm = async (id: string) => {
    const response = await deleteCatalog(id);
    if (response.succeeded) {
      message.success('Deleted');
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const columns: ProColumns<API.Catalog>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'View count',
      dataIndex: 'viewCount',
      search: false,
      valueType: 'digit',
    },
    {
      title: 'Modified date',
      dataIndex: 'modifiedDate',
      valueType: 'fromNow',
      search: false,
    },
    {
      title: 'Active',
      dataIndex: 'active',
      valueEnum: {
        false: {
          text: 'Draft',
          status: 'Default',
        },
        true: {
          text: 'Active',
          status: 'Processing',
        },
      },
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Button
          icon={<EditOutlined />}
          key={1}
          type="primary"
          onClick={() => history.push(`/article/center/${entity.id}`)}
        ></Button>,
        <Popconfirm
          title="Are you sure?"
          key={2}
          onConfirm={() => onConfirm(entity.id)}
        >
          <Button icon={<DeleteOutlined />} type="primary" danger />
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        >
          <FormattedMessage id="general.new" />
        </Button>
      }
    >
      <ProTable
        rowKey="id"
        request={(params) =>
          listCatalog({
            type: CatalogType.Article,
            ...params,
          })
        }
        columns={columns}
        actionRef={actionRef}
      />
      <NewCatalog
        open={open}
        setOpen={setOpen}
        onFinish={onFinish}
        type={CatalogType.Article}
      />
    </PageContainer>
  );
};

export default ArticleList;
