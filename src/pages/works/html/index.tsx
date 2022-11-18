import { getWorkContent, saveWorkContent } from '@/services/work-content';
import {
  PageContainer,
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';
// import EditorJS from '@editorjs/editorjs';
// const RawTool = require('@editorjs/raw');

const HtmlComponent: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  // let editor = new EditorJS();

  function htmlDecode(input: string) {
    const e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }

  useEffect(() => {
    getWorkContent(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'id',
          value: response.id,
        },
        {
          name: 'name',
          value: response.name,
        },
        {
          name: 'arguments',
          value: htmlDecode(response.arguments),
        },
        {
          name: 'parentId',
          value: response.parentId,
        },
        {
          name: 'catalogId',
          value: response.catalogId,
        },
        {
          name: 'componentId',
          value: response.componentId,
        },
        {
          name: 'active',
          value: response.active,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: API.WorkItem) => {
    const response = await saveWorkContent(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer title="Html">
      <ProForm formRef={formRef} onFinish={onFinish}>
        <ProFormText name="id" hidden={true} />
        <ProFormText name="parentId" hidden={true} />
        <ProFormText name="catalogId" hidden={true} />
        <ProFormText name="componentId" hidden={true} />
        <ProFormText name="name" label="Name" />
        <ProFormTextArea name="arguments" label="Raw" />
        <ProFormCheckbox name="active" label="Active" />
      </ProForm>
    </PageContainer>
  );
};

export default HtmlComponent;
