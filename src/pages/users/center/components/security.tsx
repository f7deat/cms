import { ModalForm, ProFormText, ProList } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useState } from 'react';

type SecuriryCenterProps = {
  headerTitle: string;
};

const SecuriryCenter: React.FC<SecuriryCenterProps> = (props) => {
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

  const handleEdit = (id: string) => {
    switch (id) {
      case 'password':
        setPOpen(true);
        break;

      default:
        break;
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
      <ModalForm open={pOpen} onOpenChange={setPOpen} title="Change password">
        <ProFormText
          name="oldPassword"
          label="Old password"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText
          name="newPassword"
          label="New password"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText
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
