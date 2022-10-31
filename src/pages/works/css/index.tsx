import { addCss, listCss } from '@/services/work-item';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProFormCheckbox,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, message } from 'antd';
import { useEffect, useState } from 'react';

const CssComponent: React.FC = () => {
  const [css, setCss] = useState<API.WorkItem[]>();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    listCss().then((response) => {
      setCss(response);
    });
  }, []);

  const onFinish = async (values: API.WorkItem) => {
    if (values.workId) {
    } else {
      const response = await addCss(values);
      if (response.succeeded) {
        message.success('Added!');
        setVisible(false);
      }
    }
  };

  return (
    <PageContainer
      title="CSS"
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setVisible(true)}
        >
          Create
        </Button>
      }
    >
      <ProList
        dataSource={css}
        metas={{
          title: {
            dataIndex: 'name',
          },
          actions: {
            render: (dom, entity) => [
              <Button
                key={1}
                icon={<EditOutlined />}
                onClick={() => {
                  history.push(`/works/css/item/${entity.workId}`);
                }}
              ></Button>,
            ],
          },
        }}
      />
      <ModalForm
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onFinish}
      >
        <ProFormText name="name" label="Name" />
        <ProFormText name="sortOrder" label="Sort order" />
        <ProFormCheckbox name="active" label="Active" />
      </ModalForm>
    </PageContainer>
  );
};

export default CssComponent;
