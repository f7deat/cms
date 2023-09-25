import { getAppSetting, saveAppSetting } from '@/services/setting';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, Row, message } from 'antd';
import { useEffect, useRef } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';

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
        {
          name: 'clientId',
          value: response.clientId,
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
      <Row gutter={16}>
        <Col span={6}>
          <ProCard title="Blogger" extra={<a href='https://blogger.com/' target='_blank'><InfoCircleOutlined /></a>}>
            <ProForm formRef={formRef} onFinish={onFinish}>
              <ProFormText.Password name="bloggerApiKey" label="Blogger API Key" />
              <ProFormText.Password name="clientId" label="Client ID" />
            </ProForm>
          </ProCard>
        </Col>
        <Col span={6}>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default GoogleApp;