import {
  addLocalization,
  listLocalization,
  saveLocalization,
} from '@/services/localization';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProColumns,
  ProFormInstance,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const Localization: React.FC = () => {
  const intl = useIntl();
  const formRef = useRef<ProFormInstance>();
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    formRef.current?.resetFields();
    setOpen(true);
  };

  const handleUpdate = (item: any) => {
    formRef.current?.setFields([
      {
        name: 'id',
        value: item.id,
      },
      {
        name: 'key',
        value: item.key,
      },
      {
        name: 'value',
        value: item.value,
      },
    ]);
    setOpen(true);
  };

  const columns: ProColumns<any>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Key',
      dataIndex: 'key',
    },
    {
      title: 'Value',
      dataIndex: 'value',
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Button
          icon={<EditOutlined />}
          key={1}
          type="primary"
          onClick={() => handleUpdate(entity)}
        ></Button>,
        <Popconfirm title="Are you sure?" key={2}>
          <Button icon={<DeleteOutlined />} type="primary" danger />
        </Popconfirm>,
      ],
    },
  ];

  const onFinish = async (values: any) => {
    if (!values.id) {
      const response = await addLocalization(values);
      if (response.succeeded) {
        message.success('Saved!');
      }
    } else {
      const response = await saveLocalization(values);
      if (response.succeeded) {
        message.success('Saved!');
      }
    }
    setOpen(false);
  };

  return (
    <PageContainer
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          <FormattedMessage id="general.new" />
        </Button>
      }
    >
      <ProTable columns={columns} request={listLocalization} rowKey="id" />
      <ModalForm
        title={intl.formatMessage({
          id: 'menu.settings.localization',
        })}
        formRef={formRef}
        open={open}
        onOpenChange={setOpen}
        onFinish={onFinish}
      >
        <ProFormText name="id" disabled />
        <ProFormText
          name="key"
          label="Key"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <ProFormText
          name="value"
          label="Value"
          rules={[
            {
              required: true,
            },
          ]}
        />
      </ModalForm>
    </PageContainer>
  );
};

export default Localization;
