import {
  deleteFileContent,
  getFileDetail,
  listWorkItemFiles,
} from '@/services/file-service';
import { DeleteOutlined, FolderOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { useParams } from '@umijs/max';
import { Col, Empty, Row, Button, Popconfirm, message } from 'antd';
import { useEffect, useState } from 'react';
import FilePreview from './preview';

const FileCenter: React.FC = () => {
  const { id } = useParams();
  const intl = useIntl();
  const [fileContent, setFileContent] = useState<API.FileContent>();

  useEffect(() => {
    getFileDetail(id).then((response) => {
      setFileContent(response);
    });
  }, []);

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
      title: intl.formatMessage({
        id: 'general.status',
      }),
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
      width: 120,
      render: (dom, entity) => [
        <Button
          icon={<FolderOutlined />}
          key={1}
          type="primary"
          onClick={() => {
            history.push(
              `/works/${entity.normalizedName.toLocaleLowerCase()}/${
                entity.id
              }`,
            );
          }}
        ></Button>,
        <Popconfirm title="Are you sure?" key={2}>
          <Button icon={<DeleteOutlined />} type="primary" danger />
        </Popconfirm>,
      ],
    },
  ];

  const onConfirm = async () => {
    const response = await deleteFileContent(id);
    if (response.succeeded) {
      message.success(
        intl.formatMessage({
          id: 'general.deleted',
        }),
      );
      history.back();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const extra = (
    <Popconfirm title="Are you sure?" onConfirm={onConfirm}>
      <Button type="primary" danger icon={<DeleteOutlined />}>
        {' '}
        Delete
      </Button>
    </Popconfirm>
  );

  return (
    <PageContainer title="Center" extra={extra}>
      <Row gutter={16}>
        <Col span={4}>
          <FilePreview file={fileContent} />
        </Col>
        <Col span={16}>
          <ProTable
            columns={columns}
            request={(params) => listWorkItemFiles(params, { id })}
            rowKey="id"
          />
        </Col>
        <Col span={4}>
          <ProCard title="Work content">
            <Empty />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default FileCenter;
