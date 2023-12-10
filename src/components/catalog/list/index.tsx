import FormCatalogType from '@/components/form/catalog-type';
import { CatalogType } from '@/constants';
import { addCatalog, deleteCatalog, listCatalog } from '@/services/catalog';
import { simplyLocale } from '@/utils/format';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProColumns,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { useIntl } from '@umijs/max';
import { history } from '@umijs/max';
import { message, Button, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

type CatalogListProps = {
  type?: CatalogType;
};

const CatalogList: React.FC<CatalogListProps> = (props) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState<boolean>(false);

  const onConfirm = async (id?: string) => {
    const response = await deleteCatalog(id);
    if (response.succeeded) {
      message.success('Deleted');
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const url = () => {
    switch (props.type) {
      case CatalogType.Tag:
        return 'catalog/tag';

      default:
        return 'catalog';
    }
  };

  const columns: ProColumns<API.Catalog>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Modified date',
      dataIndex: 'modifiedDate',
      valueType: 'fromNow',
      search: false,
      sorter: true
    },
    {
      title: 'View',
      dataIndex: 'viewCount',
      valueType: 'digit',
      search: false,
      sorter: true
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
          onClick={() => history.push(`/${url()}/${entity.id}`)}
        ></Button>,
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

  const onFinish = async (values: API.Catalog) => {
    values.type = Number(values.type);
    const response = await addCatalog(values);
    if (response.succeeded) {
      message.success('Added!');
      actionRef.current?.reload();
      setOpen(false);
    }
  };

  return (
    <div>
      <ProTable
        rowSelection={{}}
        rowKey="id"
        request={(params, sort) =>
          listCatalog({
            ...params,
            type: props.type,
            language: simplyLocale(intl.locale)
          }, sort)
        }
        search={{
          layout: "vertical"
        }}
        columns={columns}
        actionRef={actionRef}
        toolBarRender={() => [
          <Button key="new" type="primary" onClick={() => setOpen(true)} icon={<PlusOutlined />}>
            <span><FormattedMessage id="general.new" /></span>
          </Button>,
        ]}
      />
      <ModalForm
        open={open}
        onOpenChange={setOpen}
        onFinish={onFinish}
        title={intl.formatMessage({
          id: 'general.new',
        })}
      >
        <ProFormText
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        />
        <FormCatalogType label='Type' name='type' initialValue={`${props.type}`} />
        <ProFormTextArea label="Description" name="description" />
        <ProFormText name="language" initialValue={simplyLocale(intl.locale)} hidden />
      </ModalForm>
    </div>
  );
};

export default CatalogList;
