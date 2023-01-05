import { getFooter, saveFooter } from '@/services/setting';
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    getFooter(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'companyName',
          value: response.companyName,
        },
      ]);
    });
  }, []);

  const onFinish = async (values: any) => {
    const response = await saveFooter(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer>
      <ProForm formRef={formRef} onFinish={onFinish}>
        <ProFormText name="id" initialValue={id} hidden />
        <ProFormText name="companyName" label="Your company" />
      </ProForm>
    </PageContainer>
  );
};

export default Footer;
