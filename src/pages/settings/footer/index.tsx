import { getFooter, saveFooter } from '@/services/setting';
import {
  PageContainer,
  ProCard,
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
      <ProCard>
        <ProForm formRef={formRef} onFinish={onFinish}>
          <ProFormText name="id" initialValue={id} hidden />
          <ProFormText name="companyName" label="Your company" />
          <ProFormText name="email" label="Email" />
          <ProFormText name="phoneNumber" label="Phone number" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default Footer;
