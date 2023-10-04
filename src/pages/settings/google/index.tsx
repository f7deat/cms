import { getAppSetting, saveAppSetting } from '@/services/setting';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import { Button, Col, Row, Space, message } from 'antd';
import { useEffect, useRef } from 'react';
import { ArrowLeftOutlined, InfoCircleOutlined } from '@ant-design/icons';

const GoogleApp: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    getAppSetting(id).then((response) => {
      if (!response) {
        return;
      }
      formRef.current?.setFields([
        {
          name: 'bloggerApiKey',
          value: response.bloggerApiKey,
        },
        {
          name: 'clientId',
          value: response.clientId,
        },
        {
          name: 'firebaseApiKey',
          value: response.firebase?.apiKey
        },
        {
          name: 'authDomain',
          value: response.firebase?.authDomain
        },
        {
          name: 'databaseURL',
          value: response.firebase?.databaseURL
        },
        {
          name: 'storageBucket',
          value: response.firebase?.storageBucket
        },
        {
          name: 'messagingSenderId',
          value: response.firebase?.messagingSenderId
        },
        {
          name: 'appId',
          value: response.firebase?.appId
        },
        {
          name: 'measurementId',
          value: response.firebase?.measurementId
        }
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
    <PageContainer extra={<Button icon={<ArrowLeftOutlined />} onClick={() => history.back()}><span><FormattedMessage id='general.back' /></span></Button>}>
      <ProForm formRef={formRef} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={6}>
            <ProCard title="Blogger" extra={<a href='https://blogger.com/' target='_blank'><InfoCircleOutlined /></a>}>
              <ProFormText.Password name="bloggerApiKey" label="Blogger API Key" />
              <ProFormText.Password name="clientId" label="Client ID" />
            </ProCard>
          </Col>
          <Col span={6}>
            <ProCard title="Firebase" extra={<a href='https://firebase.google.com/' target='_blank'><InfoCircleOutlined /></a>}>
              <Space>
                <ProFormText name="firebaseApiKey" label="Api key" />
                <ProFormText name="authDomain" label="Auth Domain" />
              </Space>
              <Space>
                <ProFormText name="databaseURL" label="DatabaseURL" />
                <ProFormText name="projectId" label="Project Id" />
              </Space>
              <Space>
                <ProFormText name="storageBucket" label="Storage Bucket" />
                <ProFormText name="messagingSenderId" label="Messaging Sender Id" />
              </Space>
              <Space>
                <ProFormText name="appId" label="App Id" />
                <ProFormText name="measurementId" label="Measurement Id" />
              </Space>
            </ProCard>
          </Col>
        </Row>
      </ProForm>
    </PageContainer>
  );
};

export default GoogleApp;
