import { listCatalog } from '@/services/catalog';
import { DeleteOutlined, FolderOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button } from 'antd';

const HomePage: React.FC = () => {
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
          onClick={() => history.push(`/catalog/${entity.id}`)}
        ></Button>,
        <Button icon={<DeleteOutlined />} key={2} type="primary" danger />,
      ],
    },
  ];

  return (
    <PageContainer ghost>
      <ProTable request={listCatalog} columns={columns} rowKey="id"></ProTable>
    </PageContainer>
  );
};

export default HomePage;
