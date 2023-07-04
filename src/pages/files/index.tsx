import { deleteFileContent, listFile } from '@/services/file-service';
import {
  ArrowUpOutlined,
  ClearOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EyeOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Avatar, Button, Col, message, Popconfirm, Row, Space, Statistic } from 'antd';
import { useRef, useState } from 'react';
import Explorer from './explorer';

const FilePage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const [open, setOpen] = useState<boolean>(false);

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
        <Button
          key={2}
          icon={<DownloadOutlined />}
          onClick={() => (window.location.href = entity.url)}
        />,
        <Popconfirm
          title="Are you sure?"
          onConfirm={() => handleDelete(entity.id)}
          key={3}
        >
          <Button type="primary" icon={<DeleteOutlined />} danger />
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer
      extra={
        <Button
          icon={<ArrowUpOutlined />}
          type="primary"
          onClick={() => setOpen(true)}
        >
          Upload
        </Button>
      }
    >
      <Row gutter={16}>
        <Col span={18}>
          <ProTable
            pagination={{
              defaultPageSize: 8
            }}
            headerTitle="Recent"
            request={listFile}
            columns={columns}
            rowKey="id"
            actionRef={actionRef}
          />
        </Col>
        <Col span={6}>
          <Row gutter={16}>
            <Col span={12}>
              <ProCard className='mb-4'>
                <Statistic title="Total Files" />
              </ProCard>
            </Col>
            <Col span={12}>
              <ProCard className='mb-4'>
                <Statistic title="Total Size" />
              </ProCard>
            </Col>
          </Row>
          <ProCard>
            <div className='flex justify-between items-center'>
              <Col span={4}>
                <Avatar icon="T" />
              </Col>
              <Col>
                <Space>
                  Clean up your space
                </Space>
              </Col>
              <Col>
                <Button icon={<ClearOutlined />}>Clean</Button>
              </Col>
            </div>
          </ProCard>
        </Col>
      </Row>
      <Explorer open={open} onOpenChange={setOpen} />
    </PageContainer>
  );
};

export default FilePage;
