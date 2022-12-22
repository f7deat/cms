import { SettingOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import { Button, Col, Empty, Row } from 'antd';

const Profile: React.FC = () => {
  const { id } = useParams();
  return (
    <PageContainer
      extra={
        <Button
          icon={<SettingOutlined />}
          type="primary"
          onClick={() => history.push(`/users/center/${id}`)}
        >
          <FormattedMessage id="menu.settings" />
        </Button>
      }
    >
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
