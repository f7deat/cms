import { listOrder } from '@/services/order';
import { DeleteOutlined, ExportOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Popconfirm, Space } from 'antd';

const Order: React.FC = () => {

  const handleRemove = async (id: string) => {

  }

  const columns: ProColumns<any>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Number',
      render: (dom, entity) => <a>{entity.number}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'createdDate',
      valueType: 'fromNow',
      search: false,
    },
    {
      title: 'Status',
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
        <Button key="view" icon={<EyeOutlined />} type="primary" />,
        <Popconfirm key="delete" title="Are you sure?" onConfirm={() => handleRemove(entity.id)}>
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
          />
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer
      extra={
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>New order</Button>
          <Button icon={<ExportOutlined />}>Export</Button>
        </Space>
      }
    >
      <ProTable rowKey="id"
        columns={columns}
        request={listOrder}
        search={{
          layout: 'vertical'
        }}
      />
    </PageContainer>
  );
};

export default Order;
