import { getNavbar, saveNavbar } from '@/services/work-content';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, message, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';

const Navbar: React.FC = () => {
  const { id } = useParams();

  const formItemRef = useRef<ProFormInstance>();
  const formNavRef = useRef<ProFormInstance>();

  const [navItems, setNavItems] = useState<API.NavItem[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

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
    if (navItems && navItems.length > 0) {
      setNavItems((pre) => [...pre, values]);
    } else {
      setNavItems([values]);
    }
    message.success('Added!');
    formItemRef.current?.resetFields();
    setVisible(false);
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
            <ProForm onFinish={onFinish} formRef={formNavRef}>
              <ProFormCheckbox name="container" label="Container" />
            </ProForm>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            extra={
              <Button type="primary" onClick={() => setVisible(true)}>
                Add
              </Button>
            }
          >
            <ProList<API.NavItem>
              dataSource={navItems}
              header={false}
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
          </ProCard>
        </Col>
      </Row>
      <ModalForm
        onFinish={handleAddNavItem}
        formRef={formItemRef}
        open={visible}
        onOpenChange={setVisible}
      >
        <ProFormText name="name" label="Name" />
        <ProFormText name="url" label="Url" />
      </ModalForm>
    </PageContainer>
  );
};

export default Navbar;
