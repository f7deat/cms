import { listComponent } from '@/services/component';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Popconfirm } from 'antd';

const Block: React.FC = () => {
  const columns: ProColumns<API.Component>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Normalized name',
      dataIndex: 'normalizedName',
    },
    {
      title: 'Status',
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
        <Popconfirm title="Are you sure?" key={2}>
          <Button icon={<DeleteOutlined />} type="primary" danger />
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable rowKey="id" request={listComponent} columns={columns} />
    </PageContainer>
  );
};

export default Block;
