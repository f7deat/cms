import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Empty, Row } from 'antd';

const Profile: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={6}>
          <ProCard>
            <Empty />
          </ProCard>
        </Col>
        <Col span={18}>
          <ProCard>
            <Empty />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Profile;
