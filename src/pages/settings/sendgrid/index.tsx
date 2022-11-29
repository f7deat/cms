import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';

const SendGrid: React.FC = () => {
  return (
    <PageContainer
      title="SendGrid"
      subTitle="SendGrid là một dịch vụ gửi email"
    >
      <ProCard>
        <ProForm>
          <ProFormText name="apiKey" label="API Key" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default SendGrid;
