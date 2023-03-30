import WorkSummary from '@/components/works/summary';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history } from '@umijs/max';
import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import ContactFormContent from './components/content';
import ContactFormSetting from './components/setting';

const ContactForm: React.FC = () => {
  const [tab, setTab] = useState('content');

  return (
    <PageContainer
      extra={
        <Button icon={<ArrowLeftOutlined />} onClick={() => history.back()}>
          <FormattedMessage id="general.back" />
        </Button>
      }
    >
      <Row gutter={16}>
        <Col span={16}>
          <ProCard
            tabs={{
              activeKey: tab,
              items: [
                {
                  label: 'Content',
                  key: 'content',
                  children: <ContactFormContent />,
                },
                {
                  label: 'Setting',
                  key: 'setting',
                  children: <ContactFormSetting />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
          />
        </Col>
        <Col span={8}>
          <WorkSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ContactForm;
