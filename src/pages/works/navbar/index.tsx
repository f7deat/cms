import { getNavbar, saveNavbar } from '@/services/work-content';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, Divider, message, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';

const Navbar: React.FC = () => {
  const { id } = useParams();

  const formItemRef = useRef<ProFormInstance>();
  const formNavRef = useRef<ProFormInstance>();

  const [navItems, setNavItems] = useState<API.NavItem[]>([]);

  useEffect(() => {
    getNavbar(id).then((response) => {
      setNavItems(response.navItems);
    });
  }, []);

  const onFinish = async (values: API.Navbar) => {
    if (navItems.length === 0) {
      message.warning('No items were configurated!');
      return;
    }
    values.navItems = navItems;
    values.id = id;
    const response = await saveNavbar(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  const handleAddNavItem = async (values: API.NavItem) => {
    if (!values.name || !values.url) {
      message.warning('Please input name and url!');
      return;
    }
    if (navItems.length > 0 && navItems.find((x) => x.url === values.url)) {
      message.warning('Url exist!');
      return;
    }
    setNavItems((pre) => [...pre, values]);
    message.success('Added!');
    formItemRef.current?.resetFields();
  };

  const handleUpdateNavItem = (values: API.NavItem) => {
    formItemRef.current?.setFields([
      {
        name: 'name',
        value: values.name,
      },
      {
        name: 'url',
        value: values.url,
      },
    ]);
  };

  const handleRemoveNavItem = (values: API.NavItem) => {
    setNavItems(navItems.filter((x) => x !== values));
  };

  return (
    <PageContainer title="Navbar">
      <Row gutter={16}>
        <Col span={18}>
          <ProCard>
            <ProForm onFinish={handleAddNavItem} formRef={formItemRef}>
              <ProFormText name="name" label="Name" />
              <ProFormText name="url" label="Url" />
            </ProForm>
          </ProCard>
          <Divider />
          <ProCard>
            <ProForm onFinish={onFinish} formRef={formNavRef}>
              <ProFormCheckbox name="container" label="Container" />
            </ProForm>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProList<API.NavItem>
            dataSource={navItems}
            headerTitle="Navbar"
            metas={{
              title: {
                dataIndex: 'name',
              },
              actions: {
                render: (dom, entity) => [
                  <Button
                    icon={<EditOutlined />}
                    key={1}
                    onClick={() => handleUpdateNavItem(entity)}
                  />,
                  <Button
                    icon={<DeleteOutlined />}
                    key={2}
                    danger
                    type="primary"
                    onClick={() => handleRemoveNavItem(entity)}
                  />,
                ],
              },
            }}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Navbar;
