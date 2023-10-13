import { queryOrder } from '@/services/order';
import { PrinterOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, ProTable } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, Row } from 'antd';
import { useEffect, useState } from 'react';

const OrderCenter: React.FC = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>();
  useEffect(() => {
    queryOrder(id).then(response => {
      setOrder(response);
    })
  }, []);

  return (
    <PageContainer title={order?.number} extra={<Button icon={<PrinterOutlined />}>Print</Button>}>
      <Row gutter={16} className='mb-4'>
        <Col md={12}>
          <ProCard></ProCard>
        </Col>
        <Col md={12}>
          <ProCard></ProCard>
        </Col>
      </Row>
      <ProTable />
    </PageContainer>
  );
};

export default OrderCenter;
