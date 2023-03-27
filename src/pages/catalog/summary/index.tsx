import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { useState } from 'react';
import Setting from '../setting';
import Content from './content';

const CatalogSummary: React.FC = () => {
  const intl = useIntl();
  const [tab, setTab] = useState('content');

  return (
    <ProCard
      title="Summary"
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      tabs={{
        tabPosition: 'top',
        activeKey: tab,
        items: [
          {
            label: 'Content',
            key: 'content',
            children: <Content />,
          },
          {
            label: intl.formatMessage({
              id: 'menu.settings',
            }),
            key: 'setting',
            children: <Setting />,
          },
        ],
        onChange: (key) => {
          setTab(key);
        },
      }}
    ></ProCard>
  );
};

export default CatalogSummary;
