import { getContactForm, saveContactForm } from '@/services/work-content';
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Divider, message, Typography } from 'antd';
import { useEffect, useRef } from 'react';

const ContactForm: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getContactForm(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'id',
          value: id,
        },
        {
          name: 'name',
          value: response.name,
        },
        {
          name: 'resultUrl',
          value: response.resultUrl,
        },
        {
          name: 'labelName',
          value: response.labels?.name,
        },
        {
          name: 'email',
          value: response.labels?.email,
        },
        {
          name: 'phoneNumber',
          value: response.labels?.phoneNumber,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: any) => {
    const labels: API.ContactFormLabel = {
      name: values.labelName,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };
    const body: API.ContactForm = {
      id: values.id,
      name: values.name,
      resultUrl: values.resultUrl,
      labels: labels,
    };

    const response = await saveContactForm(body);
    if (response.succeeded) {
      message.success(`Saved!`);
    }
  };

  return (
    <PageContainer title="Contact form">
      <ProForm formRef={formRef} onFinish={onFinish}>
        <ProFormText name="id" hidden />
        <ProFormText name="name" label="Name" />
        <ProFormText name="resultUrl" label="Result url" />
        <Divider />
        <Typography.Title level={4}>Labels</Typography.Title>
        <ProFormText name="labelName" label="Name" />
        <ProFormText name="email" label="Email" />
        <ProFormText name="phoneNumber" label="Phone number" />
      </ProForm>
    </PageContainer>
  );
};

export default ContactForm;
