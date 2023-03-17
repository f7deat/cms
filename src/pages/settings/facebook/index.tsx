import { facebookGet, facebookSave } from '@/services/setting';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, message, Row } from 'antd';
import { useEffect, useRef } from 'react';

const FacebookApp: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    facebookGet(id).then((response) => {
      if (response) {
        formRef.current?.setFields([
          {
            name: 'appId',
            value: response.appId,
          },
          {
            name: 'appSecret',
            value: response.appSecret,
          },
          {
            name: 'pageAccessToken',
            value: response.pageAccessToken,
          },
          {
            name: 'pageId',
            value: response.pageId,
          },
          {
            name: 'shortLiveToken',
            value: response.shortLiveToken,
          },
        ]);
      }
    });
  }, []);

  const onFinish = async (values: API.Facebook) => {
    const response = await facebookSave(values);
    if (response.succeeded) {
      message.success('Saved');
    }
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <ProCard>
            <ProForm onFinish={onFinish} formRef={formRef}>
              <ProFormText name="id" initialValue={id} hidden />
              <ProFormText name="appId" label="App Id" />
              <ProFormText.Password name="appSecret" label="App secret" />
              <ProFormText name="shortLiveToken" label="Short live token" />
              <ProFormText name="pageAccessToken" label="Page access token" />
              <ProFormText name="pageId" label="Page ID" />
            </ProForm>
          </ProCard>
        </Col>
        <Col span={8}>
          <ProCard title="Tools"></ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default FacebookApp;
