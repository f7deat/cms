import { listTelegramConfiguration, saveTelegram } from '@/services/setting';
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useRef, useState } from 'react';

const Telegram: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState<boolean>(false);

  const handleEdit = (id: string) => {
    switch (id) {
      case 'bot':
        setOpen(true);
        break;

      default:
        break;
    }
  };

  const onFinish = async (values: any) => {
    const response = await saveTelegram(values);
    if (response.succeeded) {
      message.success('Saved!');
      setOpen(false);
      actionRef.current?.reload();
    }
  };

  return (
    <PageContainer>
      <ProList<any>
        actionRef={actionRef}
        request={listTelegramConfiguration}
        rowKey="id"
        metas={{
          title: {
            dataIndex: 'name',
          },
          subTitle: {
            render: (text, row) =>
              row.active ? (
                <CheckCircleOutlined />
              ) : (
                <ExclamationCircleOutlined />
              ),
          },
          actions: {
            render: (text, row) => [
              <Button
                type="link"
                key={row.id}
                onClick={() => handleEdit(row.id)}
              >
                Chỉnh sửa
              </Button>,
            ],
          },
        }}
      />
      <ModalForm open={open} onOpenChange={setOpen} onFinish={onFinish}>
        <ProFormText label="BOT" name="bot" />
      </ModalForm>
    </PageContainer>
  );
};

export default Telegram;
