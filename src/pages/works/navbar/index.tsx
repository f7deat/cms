import {
  PageContainer,
  ProForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Divider, message } from 'antd';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [navItems, setNavItems] = useState<API.NavItem[]>([]);

  const onFinish = async (values: API.Navbar) => {
    values.navItems = navItems;
    console.log(values);
  };

  const handleAddNavItem = async (values: API.NavItem) => {
    setNavItems((pre) => [...pre, values]);
    message.success('Added!');
  };

  return (
    <PageContainer title="Navbar">
      <ProForm onFinish={handleAddNavItem}>
        <ProFormText name="name" label="Name" />
        <ProFormText name="url" label="Url" />
      </ProForm>
      <Divider />
      <ProForm onFinish={onFinish}>
        <ProFormCheckbox name="container" label="Container" />
      </ProForm>
    </PageContainer>
  );
};

export default Navbar;
