import WorkContentComponent from '@/components/works';
import { getCatalog } from '@/services/catalog';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import CatalogSummary from '../catalog/summary';

const ProductCenter: React.FC = () => {
  const { id } = useParams();
  const [catalog, setCatalog] = useState<API.Catalog>();

  useEffect(() => {
    getCatalog(id).then((response) => {
      setCatalog(response);
    });
  }, [id]);

  return (
    <PageContainer title={catalog?.name}>
      <Row gutter={16}>
        <Col span={16}>
          <ProCard>
            <WorkContentComponent />
          </ProCard>
        </Col>
        <Col span={8}>
          <CatalogSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ProductCenter;
