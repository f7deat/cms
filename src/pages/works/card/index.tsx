import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';

const WfCard: React.FC = () => {
  return (
    <PageContainer title="Card">
      <ProForm>
        <ProFormText name="title" label="Title" />
        <ProFormTextArea name="text" label="Text" />
      </ProForm>
    </PageContainer>
  );
};

export default WfCard;
