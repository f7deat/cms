import BlockEditorForm from '@/components/editorjs/block-editor-form';
import { saveArguments } from '@/services/work-content';
import { ProForm } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';

const BlockEditorContent: React.FC = () => {
  const { id } = useParams();

  const onFinish = async (values: any) => {
    const data = {
      type: 0,
      blockEditor: values.blockEditor,
    };
    const response = await saveArguments(id, data);
    if (response.succeeded) {
      message.success('Saved');
    }
  };

  return (
    <div>
      <ProForm onFinish={onFinish}>
        <BlockEditorForm />
      </ProForm>
    </div>
  );
};

export default BlockEditorContent;
