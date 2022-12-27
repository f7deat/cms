import { getUser } from '@/services/user';
import { SettingOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import { Image, Button, Col, Empty, Row, Divider, Descriptions } from 'antd';
import { useEffect, useState } from 'react';

const Profile: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<API.User>();

  useEffect(() => {
    getUser(id).then((response) => {
      setUser(response);
    });
  }, []);

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
            <div className="flex items-center justify-center">
              <Image src={user?.avatar} width={200} height={200} />
            </div>
            <Divider />
            <Descriptions title="Info" column={1}>
              <Descriptions.Item label="Name">{user?.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">
                {user?.phoneNumber}
              </Descriptions.Item>
            </Descriptions>
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
