import WorkSummary from '@/components/works/summary';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Empty, Row } from 'antd';
import { useState } from 'react';
import WordPress from './word-press';
import BlockEditorContent from './block-editor';

const PostContent: React.FC = () => {
  const [tab, setTab] = useState<string>('0');

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col md={16}>
          <ProCard
            tabs={{
              tabPosition: 'top',
              activeKey: tab,
              items: [
                {
                  label: 'BlockEditor',
                  key: '0',
                  children: <BlockEditorContent />,
                },
                {
                  label: 'WordPress',
                  key: '1',
                  children: <WordPress />,
                },
                {
                  label: 'Blogspot',
                  key: '2',
                  children: <Empty />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
          />
        </Col>
        <Col md={8}>
          <WorkSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default PostContent;
