import Explorer from '@/pages/files/explorer';
import { ArrowUpOutlined } from '@ant-design/icons';
import { PageContainer, ProList } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useState } from 'react';

const Mansonry: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageContainer
      extra={
        <Button
          icon={<ArrowUpOutlined />}
          type="primary"
          onClick={() => setOpen(true)}
        >
          Upload
        </Button>
      }
    >
      <ProList />
      <Explorer open={open} onOpenChange={setOpen} />
    </PageContainer>
  );
};

export default Mansonry;
