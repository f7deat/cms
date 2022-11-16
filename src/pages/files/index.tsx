import { deleteFileContent, listFile } from '@/services/file-service';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef } from 'react';

const FilePage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const handleDelete = async (id: string) => {
    const response = await deleteFileContent(id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const columns: ProColumns<API.FileListItem>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Url',
      dataIndex: 'url',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      search: false,
      render: (dom, entity) => `${(entity.size / 1024).toFixed(2)} KB`,
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
            history.push(`/files/center/${entity.id}`);
          }}
        />,
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => handleDelete(entity.id)}
          key={2}
        >
          <Button type="primary" icon={<DeleteOutlined />} danger />
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer title="Quản lý tệp tin">
      <ProTable
        request={listFile}
        columns={columns}
        rowKey="id"
        actionRef={actionRef}
      />
    </PageContainer>
  );
};

export default FilePage;
