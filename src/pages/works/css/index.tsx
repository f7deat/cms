import { addCss, deleteCss, listCss } from '@/services/work-content';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProFormCheckbox,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const CssComponent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();

  const onFinish = async (values: API.WorkItem) => {
    if (values.id) {
    } else {
      const response = await addCss(values);
      if (response.succeeded) {
        message.success('Added!');
        setVisible(false);
        actionRef.current?.reload();
      }
    }
  };

  const onConfirm = (id: string) => {
    deleteCss(id).then((response) => {
      if (response.succeeded) {
        message.success('Deleted!');
        actionRef.current?.reload();
      }
    });
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
      <ProList<API.WorkItem>
        request={listCss}
        actionRef={actionRef}
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
                  history.push(`/works/css/center/${entity.id}`);
                }}
              ></Button>,
              <Popconfirm
                key={2}
                title="Are you sure?"
                onConfirm={() => onConfirm(entity.id)}
              >
                <Button
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                ></Button>
              </Popconfirm>,
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
