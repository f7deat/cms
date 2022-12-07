import { deleteContact, listContact } from '@/services/contact';
import { DeleteOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { useRef } from 'react';

const ContactPage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const handleDelete = async (id: string) => {
    const response = await deleteContact(id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    }
  };

  const columns: ProColumns<API.Contact>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Created',
      dataIndex: 'createdDate',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Popconfirm
          key={1}
          title="Are you sure?"
          onConfirm={() => handleDelete(entity.id)}
        >
          <Button type="primary" danger icon={<DeleteOutlined />} />
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer title="Contact">
      <ProTable<API.Contact>
        request={listContact}
        rowKey="id"
        columns={columns}
        actionRef={actionRef}
      />
    </PageContainer>
  );
};

export default ContactPage;
