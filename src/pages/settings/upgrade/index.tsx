import { upgrade } from '@/services/backup';
import { ArrowUpOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Button, message } from 'antd';

const Upgrade: React.FC = () => {
  const intl = useIntl();

  const handleUpgrade = async () => {
    const response = await upgrade();
    if (response.succeeded) {
      message.success('Upgraded!');
    }
  };

  return (
    <PageContainer
      title={intl.formatMessage({
        id: 'menu.help.upgrade',
      })}
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
