import CatalogList from '@/components/catalog/list';
import { CatalogType } from '@/constants';
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
          <CatalogList type={CatalogType.Entry} />
        </Col>
        <Col span={8}>
          <Row gutter={16}>
            <Col span={12}>
              <ProCard>
                <Statistic title="Lượt xem" value={viewCount} />
              </ProCard>
            </Col>
            <Col span={12}>
              <ProCard>
                <Statistic title="Bài viết" value={0} />
              </ProCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
