import WorkSummary from '@/components/work-content/summary';
import { getNavbar } from '@/services/work-content';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProCard,
  ProFormInstance,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, message, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';
import NavbarContent from './content';
import NavbarSetting from './setting';

const Navbar: React.FC = () => {
  const { id } = useParams();

  const formItemRef = useRef<ProFormInstance>();

  const [navItems, setNavItems] = useState<API.NavItem[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [tab, setTab] = useState('content');

  useEffect(() => {
    getNavbar(id).then((response) => {
      setNavItems(response.navItems);
    });
  }, []);

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
    ]);
  };

  const handleRemoveNavItem = (values: API.NavItem) => {
    setNavItems(navItems.filter((x) => x !== values));
  };

  return (
    <PageContainer title="Navbar">
      <Row gutter={16}>
        <Col span={18}>
          <ProCard
            tabs={{
              activeKey: tab,
              items: [
                {
                  label: 'Content',
                  key: 'content',
                  children: <NavbarContent />,
                },
                {
                  label: 'Setting',
                  key: 'setting',
                  children: <NavbarSetting />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
          ></ProCard>
        </Col>
        <Col span={6}>
          <WorkSummary />
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
