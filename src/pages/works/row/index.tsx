import WorkSummary from '@/components/works/summary';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import RowContent from './components/content';
import RowSetting from './components/setting';

const RowComponent: React.FC = () => {
  const [tab, setTab] = useState('content');

  return (
    <PageContainer
      extra={
        <Button icon={<ArrowLeftOutlined />} onClick={() => history.back()}>
          Back
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
                  children: <RowContent />,
                },
                {
                  label: 'Setting',
                  key: 'setting',
                  children: <RowSetting />,
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

export default RowComponent;
