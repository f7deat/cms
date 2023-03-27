import WorkList from '@/components/works/list';
import WorkSummary from '@/components/works/summary';
import { getWorkContent } from '@/services/work-content';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import { Button, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
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
                  children: <WorkList />,
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
