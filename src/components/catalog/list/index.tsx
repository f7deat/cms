import FormCatalogType from '@/components/form/catalog-type';
import { CatalogType } from '@/constants';
import { activeCatalog, addCatalog, deleteCatalog, listCatalog } from '@/services/catalog';
import { DeleteOutlined, EditOutlined, MoreOutlined, PlusOutlined, SendOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProColumns,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, getLocale } from '@umijs/max';
import { useIntl } from '@umijs/max';
import { history } from '@umijs/max';
import { message, Button, Popconfirm, Dropdown } from 'antd';
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

  const onMoreClick = (e: any, entity: any) => {
    if (e.key === 'edit') {
      history.push(`/${url()}/${entity.id}`)
      return;
    }
    if (e.key === 'publish') {
      activeCatalog(entity.id).then(response => {
        if (response.succeeded) {
          message.success(entity.active ? 'Drafted' : 'Published');
          actionRef.current?.reload();
        }
      })
    }
  }

  const columns: ProColumns<API.Catalog>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
      width: 50
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Created date',
      dataIndex: 'createdDate',
      valueType: 'fromNow',
      search: false,
      sorter: true,
      width: 180
    },
    {
      title: 'Modified date',
      dataIndex: 'modifiedDate',
      valueType: 'fromNow',
      search: false,
      sorter: true,
      width: 180
    },
    {
      title: 'View',
      dataIndex: 'viewCount',
      valueType: 'digit',
      search: false,
      sorter: true,
      width: 100
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
      width: 100
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Popconfirm
          title="Are you sure?"
          key={2}
          onConfirm={() => onConfirm(entity.id)}
        >
          <Button
            size='small'
            type="dashed" icon={<DeleteOutlined />} danger />
        </Popconfirm>,
        <Dropdown key="more" menu={{
          items: [
            {
              key: 'edit',
              label: 'Edit',
              icon: <EditOutlined />
            },
            {
              key: 'publish',
              label: entity.active ? 'Draft' : 'Publish',
              icon: <SendOutlined />
            }
          ], onClick: (event) => onMoreClick(event, entity)
        }}>
          <Button type='dashed' size='small' icon={<MoreOutlined />} />
        </Dropdown>
      ],
      width: 100
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
        ghost
        rowSelection={{}}
        rowKey="id"
        request={(params, sort) =>
          listCatalog({
            ...params,
            type: props.type,
            locale: getLocale()
          }, sort)
        }
        pagination={{
          defaultPageSize: 10
        }}
        search={{
          layout: "vertical",
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
        <ProFormText name="locale" initialValue={intl.locale} hidden />
      </ModalForm>
    </div>
  );
};

export default CatalogList;
