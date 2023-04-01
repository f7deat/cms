import WorkSummary from '@/components/works/summary';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Empty, Row } from 'antd';

const Feed: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <ProCard>
            <Empty />
          </ProCard>
        </Col>
        <Col span={8}>
          <WorkSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Feed;
