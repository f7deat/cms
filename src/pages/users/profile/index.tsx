import { getUser } from '@/services/user';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import {
  Image,
  Button,
  Col,
  Empty,
  Row,
  Divider,
  Descriptions,
  Typography,
  Tag,
} from 'antd';
import { useEffect, useState } from 'react';

const Profile: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<API.User>();

  useEffect(() => {
    getUser(id).then((response) => {
      setUser(response);
    });
  }, [id]);

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
          <ProCard
            extra={
              <Button
                type="dashed"
                icon={<EditOutlined />}
                onClick={() => (window.location.href = 'https://gravatar.com/')}
              >
                Change avatar
              </Button>
            }
          >
            <div className="flex items-center justify-center flex-col">
              <Image src={user?.avatar} width={200} height={200} />
              <Typography.Title level={4}>{user?.userName}</Typography.Title>
            </div>
            <Divider />
            <Descriptions title="Info" column={1}>
              <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">
                {user?.phoneNumber}
              </Descriptions.Item>
            </Descriptions>
            <Divider />
            <Typography.Title level={5}>Roles</Typography.Title>
            {user?.roles.map((role) => (
              <Tag key={role} color="blue">
                {role}
              </Tag>
            ))}
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
