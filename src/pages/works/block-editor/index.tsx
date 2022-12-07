import ProEditorBlock from '@/components/editorjs';
import { saveBlockEditor } from '@/services/work-content';
import { SaveOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button, message, Space } from 'antd';
import { useState } from 'react';

const BlockEditor: React.FC = () => {
  const [editorData, setEditorData] = useState<any>();

  const onFinish = async () => {
    const response = await saveBlockEditor(editorData);
    if (response.succeeded) {
      message.success('Saved');
    }
  };
  return (
    <PageContainer title="Block editor">
      <ProCard
        title="Start writing"
        extra={
          <Button type="primary" onClick={onFinish}>
            <Space>
              <SaveOutlined />
              <FormattedMessage id="general.save" />
            </Space>
          </Button>
        }
      >
        <ProEditorBlock onChange={setEditorData} />
      </ProCard>
    </PageContainer>
  );
};

export default BlockEditor;
