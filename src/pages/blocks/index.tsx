import { deleteComponent, listComponent } from '@/services/component';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProColumns,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const Block: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const formRef = useRef<ProFormInstance>();

  const [open, setOpen] = useState<boolean>();

  const onConfirm = async (id: string) => {
    const response = await deleteComponent(id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    }
  };

  const handleEdit = (values: API.Component) => {
    formRef.current?.setFields([
      {
        name: 'id',
        value: values.id,
      },
      {
        name: 'name',
        value: values.name,
      },
      {
        name: 'avtive',
        value: values.active,
      },
    ]);
    setOpen(true);
  };

  const columns: ProColumns<API.Component>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      render: (dom, entity) => (
        <a
          onClick={() =>
            history.push(`/settings/component/center/${entity.id}`)
          }
        >
          {entity.name}
        </a>
      ),
    },
    {
      title: 'Normalized name',
      dataIndex: 'normalizedName',
    },
    {
      title: 'Status',
      dataIndex: 'active',
      valueEnum: {
        false: {
          text: 'Draft',
          status: 'Default',
        },
        true: {
          text: 'Active',
          status: 'Processing',
        },
      },
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Button
          icon={<EditOutlined />}
          key={1}
          type="primary"
          onClick={() => handleEdit(entity)}
        />,
        <Popconfirm
          title="Are you sure?"
          key={2}
          onConfirm={() => onConfirm(entity.id)}
        >
          <Button icon={<DeleteOutlined />} type="primary" danger />
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        request={listComponent}
        columns={columns}
        search={{
          layout: 'vertical',
        }}
      />
      <ModalForm formRef={formRef} open={open} onOpenChange={setOpen}>
        <ProFormText name="id" hidden />
        <ProFormText label="Name" name="name" />
        <ProFormCheckbox label="Active" name="active" />
      </ModalForm>
    </PageContainer>
  );
};

export default Block;
