import { addCatalog, listCatalog } from '@/services/catalog';
import {
  DeleteOutlined,
  FolderOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProColumns,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { history } from '@umijs/max';
import { Button, message } from 'antd';
import { useRef, useState } from 'react';

const HomePage: React.FC = () => {
  const { setCatalogId } = useModel('catalog');

  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: API.Catalog) => {
    const response = await addCatalog(values);
    if (response.succeeded) {
      message.success('Added!');
      actionRef.current?.reload();
      setVisible(false);
    }
  };

  const goDetail = (id: string) => {
    setCatalogId(id);
    history.push(`/catalog/${id}`);
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
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Modified date',
      dataIndex: 'modifiedDate',
      valueType: 'dateTime',
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
          icon={<FolderOutlined />}
          key={1}
          type="primary"
          onClick={() => goDetail(entity.id)}
        ></Button>,
        <Button icon={<DeleteOutlined />} key={2} type="primary" danger />,
      ],
    },
  ];

  return (
    <PageContainer
      ghost
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setVisible(true)}
        >
          New page
        </Button>
      }
    >
      <ProTable
        request={listCatalog}
        columns={columns}
        rowKey="id"
        actionRef={actionRef}
      ></ProTable>
      <ModalForm
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onFinish}
      >
        <ProFormText name="name" label="Name" />
        <ProFormText name="normalizedName" label="Normalized Name" />
      </ModalForm>
    </PageContainer>
  );
};

export default HomePage;
