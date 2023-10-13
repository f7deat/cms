import { deleteOrder, listOrder } from '@/services/order';
import { ArrowDownOutlined, ArrowUpOutlined, DeleteOutlined, ExportOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProColumns,
  ProFormDateRangePicker,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Card, Col, Empty, Popconfirm, Row, Space, Statistic, message } from 'antd';
import { ColumnChart } from 'bizcharts';

const Order: React.FC = () => {

  const handleRemove = async (id: string) => {
    const response = await deleteOrder(id);
    if (response.succeeded) {
      message.success('Deleted!');
    }
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
        <Button key="view" icon={<EyeOutlined />} type="primary" onClick={() => history.push(`/ecommerce/order/center/${entity.id}`)} />,
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

  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
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

      <Row gutter={16} className='mb-4'>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={18}>
          <ProCard className='mb-4' title="Sales summary" extra={<ProFormDateRangePicker label="Showing" />}>
            <ColumnChart data={data}
              xField='type'
              yField='sales'
              label={{
                position: 'middle',
                style: {
                  fill: '#FFFFFF',
                  opacity: 0.6,
                },
              }}
              xAxis={{
                label: {
                  autoHide: true,
                  autoRotate: false,
                },
              }}
              meta={{
                type: {
                  alias: 'đ',
                },
                sales: {
                  alias: 'Money',
                },
              }}
            />
          </ProCard>
          <ProTable
            headerTitle="Recent orders"
            rowKey="id"
            columns={columns}
            request={listOrder}
            search={{
              layout: 'vertical'
            }}
          />
        </Col>
        <Col span={6}>
          <ProCard title="Earnings" className='mb-4'>
            <Empty />
          </ProCard>
          <ProCard title="Top products" className='mb-4'>
            <Empty />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Order;
