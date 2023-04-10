import { listOrder } from '@/services/order';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Space } from 'antd';

const Order: React.FC = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'ID',
      render: (dom, entity) => <a>{entity.id}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'createdDate',
      valueType: 'fromNow',
      search: false,
    },
    {
      title: 'status',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: 'Open',
          status: 'Processing',
        },
        1: {
          text: 'Confirmed',
          status: 'Processing',
        },
        2: {
          text: 'Paid',
          status: 'Success',
        },
        3: {
          text: 'Refunded',
          status: 'Default',
        },
        4: {
          text: 'Cancelled',
          status: 'Error',
        },
      },
    },
    {
      title: 'customer',
      dataIndex: 'customer',
    },
    {
      title: 'product',
      dataIndex: 'product',
    },
    {
      title: 'revenua',
      dataIndex: 'revenua',
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Button key={entity.id} icon={<EyeOutlined />} type="primary"></Button>,
        <Button
          key={entity.id}
          icon={<DeleteOutlined />}
          type="primary"
          danger
        ></Button>,
      ],
    },
  ];
  return (
    <PageContainer
      extra={
        <Space>
          <Button type="primary">New order</Button>
          <Button>Export</Button>
        </Space>
      }
    >
      <ProTable rowKey="id" columns={columns} request={listOrder} />
    </PageContainer>
  );
};

export default Order;
