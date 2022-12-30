import { createUser, listUser } from '@/services/user';
import {
  DeleteOutlined,
  EyeOutlined,
  InfoCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProColumns,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl, history } from '@umijs/max';
import { Alert, Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const UserList: React.FC = () => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState('Please input values!');

  const onFinish = async (values: any) => {
    if (values.password !== values.confirmPassword) {
      setAlertMessage('Mật khẩu không khớp');
      return;
    }
    const response = await createUser(values);
    if (response.succeeded) {
      message.success(
        intl.formatMessage({
          id: 'general.saved',
        }),
      );
      setOpen(false);
      actionRef.current?.reload();
    }
  };

  const columns: ProColumns<API.User>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'User name',
      dataIndex: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: intl.formatMessage({
        id: 'general.phoneNumber',
      }),
      dataIndex: 'phoneNumber',
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Button
          type="primary"
          icon={<EyeOutlined />}
          key={1}
          onClick={() => {
            history.push(`/users/profile/${entity.id}`);
          }}
        />,
        <Popconfirm title="Are you sure?" key={2}>
          <Button type="primary" icon={<DeleteOutlined />} danger />
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        >
          <FormattedMessage id="general.new" />
        </Button>
      }
    >
      <ProTable<API.User>
        rowKey="id"
        request={listUser}
        columns={columns}
        actionRef={actionRef}
      />
      <ModalForm
        open={open}
        onOpenChange={setOpen}
        title={intl.formatMessage({
          id: 'general.new',
        })}
        onFinish={onFinish}
      >
        <Alert
          message={alertMessage}
          showIcon
          type="error"
          className="mb-4"
          icon={<InfoCircleOutlined />}
        />
        <ProFormText name="email" label="Email" required />
        <ProFormText.Password name="password" label="Password" required />
        <ProFormText.Password
          name="confirmPassword"
          label="Confirm password"
          required
        />
      </ModalForm>
    </PageContainer>
  );
};

export default UserList;
