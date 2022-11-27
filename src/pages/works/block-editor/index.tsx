import { EDITOR_JS_TOOLS } from '@/utils/editorjs-tool';
import { SaveOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { FormattedMessage } from '@umijs/max';
import { useModel } from '@umijs/max';
import { Button, message, Space } from 'antd';
import { createReactEditorJS } from 'react-editor-js';
// @ts-ignore
import Image from '@editorjs/image';
import { useCallback, useRef } from 'react';
import { getBlockEditor, saveBlockEditor } from '@/services/work-content';

const ReactEditorJS = createReactEditorJS();

const BlockEditor: React.FC = () => {
  const state = useModel('@@initialState');
  const { id } = useParams();
  const editorCore = useRef<any>(null);

  const handleInitialize = useCallback(async (instance: any) => {
    editorCore.current = instance;
    getBlockEditor(id).then((response) => {
      setTimeout(() => {
        editorCore.current.render({
          time: new Date().getTime(),
          blocks: response,
        });
      }, 5000);
      return;
    });
  }, []);

  const handleSave = useCallback(async () => {
    const items = await editorCore.current.save();
    let data = {
      id,
      blocks: items.blocks,
    };
    const response = await saveBlockEditor(data);
    if (response.succeeded) {
      message.success('Saved!');
    }
  }, []);

  return (
    <PageContainer title="Block editor">
      <ProCard
        title="Start writing"
        extra={
          <Button type="primary" onClick={handleSave}>
            <Space>
              <SaveOutlined />
              <FormattedMessage id="general.save" />
            </Space>
          </Button>
        }
      >
        <ReactEditorJS
          onInitialize={handleInitialize}
          tools={{
            image: {
              class: Image,
              config: {
                endpoints: {
                  byFile: `${state.initialState?.domain}/api/image/editor-block/${id}`,
                },
              },
            },
            ...EDITOR_JS_TOOLS,
          }}
        />
      </ProCard>
    </PageContainer>
  );
};

export default BlockEditor;
