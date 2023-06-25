import CatalogList from '@/components/catalog/list';
import { CatalogType } from '@/constants';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useState } from 'react';

const Page: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(`${CatalogType.Default}`);

  return (
    <PageContainer>
      <ProCard 
        tabs={{
          activeKey: activeKey,
          tabPosition: 'top',
          onChange: (key) => {
            setActiveKey(key);
          },
          items: [
            {
              label: 'Trang',
              key: `${CatalogType.Default}`,
              children: <CatalogList type={CatalogType.Default} />
            },
            {
              label: 'Location',
              key: `${CatalogType.Location}`,
              children: <CatalogList type={CatalogType.Location} />
            }
          ]
        }}
      />
    </PageContainer>
  );
};

export default Page;
