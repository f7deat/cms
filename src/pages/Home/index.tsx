import CatalogList from '@/components/catalog/list';
import { CatalogType } from '@/utils/constants';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Col, Row } from 'antd';
import CatalogPage from '../catalog';

const HomePage: React.FC = () => {
  const intl = useIntl();

  return (
    <PageContainer
      title={intl.formatMessage({
        id: 'menu.home',
      })}
    >
      <Row gutter={16}>
        <Col span={12}>
          <CatalogPage />
        </Col>
        <Col span={12}>
          <CatalogList type={CatalogType.Default} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
