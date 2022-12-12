import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useState } from 'react';
import RowContent from './components/content';
import RowSetting from './components/setting';

const RowComponent: React.FC = () => {
  const [tab, setTab] = useState('content');

  return (
    <PageContainer title="Row">
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
    </PageContainer>
  );
};

export default RowComponent;
