import { CatalogType } from '@/constants';
import { addCatalog, deleteCatalog, listCatalog } from '@/services/catalog';
import {
  FolderOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProColumns,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { useModel, history } from '@umijs/max';
import { message, Button, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

type CalalogListProps = {
  type: CatalogType;
};

const CatalogList: React.FC<CalalogListProps> = (props) => {
  const { setCatalogId } = useModel('catalog');

  const actionRef = useRef<ActionType>();
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: API.Catalog) => {
    const response = await addCatalog(values);
    if (response.succeeded) {
      message.success('Added!');
      actionRef.current?.reload();
      setVisible(false);
    }
  };

  const goDetail = (id: string) => {
    setCatalogId(id);
    history.push(`/catalog/${id}`);
  };

  const onConfirm = async (id: string) => {
    const response = await deleteCatalog(id);
    if (response.succeeded) {
      message.success('Deleted');
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
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
      title: 'Description',
      dataIndex: 'description',
      search: false,
    },
    {
      title: 'Modified date',
      dataIndex: 'modifiedDate',
      valueType: 'dateTime',
      search: false,
    },
    {
      title: 'Active',
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
          icon={<FolderOutlined />}
          key={1}
          type="primary"
          onClick={() => goDetail(entity.id)}
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

  return (
    <div>
      <ProTable
        request={(params) =>
          listCatalog({
            ...params,
            type: props.type,
          })
        }
        columns={columns}
        rowKey="id"
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            key={1}
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setVisible(true)}
          >
            New page
          </Button>,
        ]}
      ></ProTable>
      <ModalForm open={visible} onOpenChange={setVisible} onFinish={onFinish}>
        <ProFormText name="name" label="Name" />
        <ProFormText name="normalizedName" label="Normalized Name" />
      </ModalForm>
    </div>
  );
};

export default CatalogList;
