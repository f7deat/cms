import WfLink from '@/components/link';
import { PlusOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Button } from 'antd';
import { useState } from 'react';

const NavbarContent: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <ProList
        toolBarRender={() => {
          return [
            <Button
              key={0}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setOpen(true)}
            >
              <FormattedMessage id="general.new" />
            </Button>,
          ];
        }}
      />
      <WfLink open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default NavbarContent;
