import { upgrade } from '@/services/backup';
import { ArrowUpOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, message } from 'antd';

const Upgrade: React.FC = () => {
  const handleUpgrade = async () => {
    const response = await upgrade();
    if (response.succeeded) {
      message.success('Upgraded!');
    }
  };

  return (
    <PageContainer
      title="Upgrade"
      extra={
        <Button
          icon={<ArrowUpOutlined />}
          type="primary"
          onClick={handleUpgrade}
        >
          Run
        </Button>
      }
    ></PageContainer>
  );
};

export default Upgrade;
