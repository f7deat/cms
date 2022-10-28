import {
  PageContainer,
  ProForm,
  ProFormTextArea,
} from '@ant-design/pro-components';

const HtmlComponent: React.FC = () => {
  return (
    <PageContainer title="Html">
      <ProForm>
        <ProFormTextArea name="arguments" label="Html"></ProFormTextArea>
      </ProForm>
    </PageContainer>
  );
};

export default HtmlComponent;
