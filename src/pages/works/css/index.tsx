import { getCss, saveCss } from '@/services/work-content';
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const CssSetting: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getCss(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'id',
          value: id,
        },
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
        <ProFormText name="id" hidden />
        <ProFormTextArea name="arguments" label="Content" />
      </ProForm>
    </PageContainer>
  );
};

export default CssSetting;
