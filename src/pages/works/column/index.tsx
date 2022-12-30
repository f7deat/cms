import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history } from '@umijs/max';
import { Button } from 'antd';
import { useState } from 'react';
import ColumnContent from './content';
import ColumnSetting from './setting';

const WfColumn: React.FC = () => {
  const [tab, setTab] = useState('content');

  return (
    <PageContainer
      title="Column"
      extra={
        <Button icon={<ArrowLeftOutlined />} onClick={() => history.back()}>
          <FormattedMessage id="general.back" />
        </Button>
      }
    >
      <ProCard
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
      ></ProCard>
    </PageContainer>
  );
};

export default WfColumn;
