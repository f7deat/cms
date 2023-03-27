import WorkSummary from '@/components/works/summary';
import { getListGroup } from '@/services/work-content';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import ListGroupContent from './content';
import ListGroupSetting from './setting';

const ListGroup: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<API.WorkContent>();
  const [tab, setTab] = useState('content');

  useEffect(() => {
    getListGroup(id).then((response) => {
      setData(response);
    });
  }, [id]);

  return (
    <PageContainer title={data?.name}>
      <Row gutter={16}>
        <Col span={16}>
          <ProCard
            tabs={{
              activeKey: tab,
              items: [
                {
                  label: 'Content',
                  key: 'content',
                  children: <ListGroupContent />,
                },
                {
                  label: 'Setting',
                  key: 'setting',
                  children: <ListGroupSetting />,
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

export default ListGroup;
