import WorkSummary from '@/components/work-content/summary';
import { activeWork, getWorkContent } from '@/services/work-content';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import { Button, Col, message, Row, Switch } from 'antd';
import { useEffect, useState } from 'react';
import ColumnContent from './content';
import ColumnSetting from './setting';

const WfColumn: React.FC = () => {
  const { id } = useParams();
  const [tab, setTab] = useState('content');
  const [work, setWork] = useState<API.WorkContent>();

  useEffect(() => {
    getWorkContent(id).then((response) => {
      setWork(response);
    });
  }, []);

  const active = async () => {
    const response = await activeWork(id);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer
      title="Column"
      extra={
        <Button icon={<ArrowLeftOutlined />} onClick={() => history.back()}>
          <FormattedMessage id="general.back" />
        </Button>
      }
    >
      <Row gutter={16}>
        <Col span={16}>
          <ProCard
            title={work?.name}
            tabs={{
              activeKey: tab,
              items: [
                {
                  label: 'Content',
                  key: 'content',
                  children: <ColumnContent />,
                },
                {
                  label: 'Setting',
                  key: 'setting',
                  children: <ColumnSetting />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
            extra={<Switch onChange={active} checked={work?.active} />}
          />
        </Col>
        <Col span={8}>
          <WorkSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default WfColumn;
