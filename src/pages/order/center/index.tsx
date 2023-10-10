import { queryOrder } from '@/services/order';
import { PageContainer } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
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
    <PageContainer title={order?.number}>
      
    </PageContainer>
  );
};

export default OrderCenter;
