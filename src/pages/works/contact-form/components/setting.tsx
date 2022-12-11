import { ProForm, ProFormText } from '@ant-design/pro-components';
import { Divider, Typography } from 'antd';

const ContactFormSetting: React.FC = () => {
  return (
    <ProForm>
      <Typography.Title level={4}>SendGrid</Typography.Title>
      <ProFormText name="apiKey" label="API key" />
      <ProFormText name="template" label="Template" />
      <Divider />
      <Typography.Title level={4}>Telegam</Typography.Title>
      <ProFormText name="chatId" label="Chat ID" />
    </ProForm>
  );
};

export default ContactFormSetting;
