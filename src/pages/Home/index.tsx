import CatalogList from '@/components/catalog/list';
import { queryViewCount } from '@/services/catalog';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    queryViewCount().then((response) => {
      setViewCount(response);
    });
  }, []);

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <CatalogList />
        </Col>
        <Col span={8}>
          <ProCard title="Thống kê">
            <Statistic title="Lượt xem" value={viewCount} />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
