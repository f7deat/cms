import { getComponent, listComponentWork } from '@/services/component';
import { deleteWorkContentById } from '@/services/work-content';
import {
  DeleteOutlined,
  EditOutlined,
  FolderOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useParams, history } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useEffect, useRef, useState } from 'react';

const ComponentCenter: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();

  const [component, setComponent] = useState<API.Component>();
  useEffect(() => {
    getComponent(id).then((response) => setComponent(response));
  }, []);

  const onConfirm = async (id: string) => {
    const response = await deleteWorkContentById(id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    }
  };

  const columns: ProColumns<API.WorkItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
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
          icon={<EditOutlined />}
          key={1}
          type="primary"
          onClick={() =>
            history.push(`/works/${entity.normalizedName}/${entity.id}`)
          }
        ></Button>,
        <Button
          key={2}
          icon={<FolderOutlined />}
          onClick={() => history.push(`/catalog/${entity.catalogId}`)}
        />,
        <Popconfirm
          title="Are you sure?"
          key={3}
          onConfirm={() => onConfirm(entity.id)}
        >
          <Button icon={<DeleteOutlined />} type="primary" danger />
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer title={component?.name}>
      <ProTable
        actionRef={actionRef}
        columns={columns}
        rowKey="id"
        request={(params) => listComponentWork(params, id)}
      />
    </PageContainer>
  );
};

export default ComponentCenter;
