import ProFormLink from '@/components/link';
import {
  addListGroupItem,
  deleteWorkContentById,
  getChildList,
} from '@/services/work-content';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProFormInstance,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { useParams } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const ListGroupContent: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();
  const formRef = useRef<ProFormInstance>();
  const [open, setOpen] = useState<boolean>(false);

  const onConfirm = async (id: string) => {
    const response = await deleteWorkContentById(id);
    if (response.succeeded) {
      message.success('Deleted');
      actionRef.current?.reload();
    }
  };

  const onFinish = async (values: any) => {
    const response = await addListGroupItem(id, values);
    if (response.succeeded) {
      message.success('Saved!');
      actionRef.current?.reload();
      setOpen(false);
    }
  };

  return (
    <div>
      <ProList<API.ListGroupItem>
        request={(params) => getChildList(params, id)}
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
        metas={{
          title: {
            dataIndex: 'name',
          },
          actions: {
            render: (dom, entity) => [
              <Popconfirm
                title="Are you sure?"
                onConfirm={() => onConfirm(entity.id)}
                key={2}
              >
                <Button icon={<DeleteOutlined />} danger type="primary" />
              </Popconfirm>,
            ],
          },
        }}
        actionRef={actionRef}
      />
      <ModalForm
        open={open}
        onOpenChange={setOpen}
        onFinish={onFinish}
        formRef={formRef}
      >
        <ProFormText name="icon" label="Icon" />
        <ProFormLink name="link" label="Link" />
      </ModalForm>
    </div>
  );
};

export default ListGroupContent;
