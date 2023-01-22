import { changePassword } from '@/services/user';
import { ModalForm, ProFormText, ProList } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, message } from 'antd';
import { useState } from 'react';

type SecuriryCenterProps = {
  headerTitle: string;
};

const SecuriryCenter: React.FC<SecuriryCenterProps> = (props) => {
  const { id } = useParams();
  const [pOpen, setPOpen] = useState<boolean>(false);

  const dataSource = [
    {
      id: 'password',
      name: 'Mật khẩu',
    },
    {
      id: 'email',
      name: 'Email',
    },
    {
      id: 'phone',
      name: 'Số điện thoại',
    },
    {
      id: 'question',
      name: 'Câu hỏi bảo mật',
    },
  ];

  const handleEdit = (key: string) => {
    switch (key) {
      case 'password':
        setPOpen(true);
        break;

      default:
        break;
    }
  };

  const onFinish = async (values: any) => {
    const response = await changePassword(values);
    if (response.succeeded) {
      message.success('Saved');
      setPOpen(false);
    } else {
      message.error(response.errors[0].description);
    }
  };

  return (
    <div>
      <ProList
        dataSource={dataSource}
        rowKey="id"
        headerTitle={props.headerTitle}
        metas={{
          title: {
            dataIndex: 'name',
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
      <ModalForm open={pOpen} onOpenChange={setPOpen} onFinish={onFinish}>
        <ProFormText name="id" initialValue={id} hidden />
        <ProFormText.Password
          name="oldPassword"
          label="Old password"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText.Password
          name="newPassword"
          label="New password"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText.Password
          name="confirmPassword"
          label="Confirm password"
          rules={[
            {
              required: true,
            },
          ]}
        />
      </ModalForm>
    </div>
  );
};

export default SecuriryCenter;
