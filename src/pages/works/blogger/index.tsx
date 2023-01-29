import { bloggerGet, bloggerSave } from '@/services/work-content';
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

const Blogger: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    bloggerGet(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'blogId',
          value: response.blogId,
        },
        {
          name: 'normalizedName',
          value: response.normalizedName,
        },
        {
          name: 'apiKey',
          value: response.apiKey,
        },
      ]);
    });
  }, []);

  const onFinish = async (values: any) => {
    const response = await bloggerSave(values);
    if (response.succeeded) {
      message.success('Saved');
    }
  };

  return (
    <PageContainer>
      <ProCard>
        <ProForm formRef={formRef} onFinish={onFinish}>
          <ProFormText name="id" initialValue={id} hidden />
          <ProFormText name="blogId" label="Blog Id" />
          <ProFormText name="normalizedName" label="Normalized name" />
          <ProFormText.Password name="apiKey" label="API Key" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default Blogger;
