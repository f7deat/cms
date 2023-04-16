import { getAppSetting, saveAppSetting } from '@/services/setting';
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

const GoogleApp: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    getAppSetting(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'bloggerApiKey',
          value: response.bloggerApiKey,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: any) => {
    const response = await saveAppSetting(id, values);
    if (response.succeeded) {
      message.success('Saved');
    }
  };

  return (
    <PageContainer>
      <ProCard>
        <ProForm formRef={formRef} onFinish={onFinish}>
          <ProFormText.Password name="bloggerApiKey" label="Blogger API Key" />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default GoogleApp;
