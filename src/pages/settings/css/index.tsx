import { getCss, saveCss } from '@/services/work-content';
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const CssSetting: React.FC = () => {
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getCss().then((response) => {
      formRef.current?.setFields([
        {
          name: 'arguments',
          value: response,
        },
      ]);
    });
  }, []);

  const onFinish = async (values: API.WorkItem) => {
    const response = await saveCss(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer>
      <ProForm onFinish={onFinish} formRef={formRef}>
        <ProFormTextArea name="arguments" label="Content" />
      </ProForm>
    </PageContainer>
  );
};

export default CssSetting;
