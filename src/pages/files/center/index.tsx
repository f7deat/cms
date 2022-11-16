import { getFileDetail, listWorkItemFiles } from '@/services/file-service';
import {
  PageContainer,
  ProCard,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useParams } from '@umijs/max';
import { Col, Empty, Row, Image } from 'antd';
import { useEffect, useState } from 'react';

const FileCenter: React.FC = () => {
  const supportImage = ['image/jpeg', 'image/png'];

  const { id } = useParams();
  const state = useModel('@@initialState');
  const [fileContent, setFileContent] = useState<API.FileContent>();

  useEffect(() => {
    getFileDetail(id).then((response) => {
      setFileContent(response);
    });
  }, []);

  const renderPreview = () => {
    if (supportImage.includes(fileContent?.type ?? '')) {
      return <Image src={`${state.initialState?.domain}${fileContent?.url}`} />;
    }
    return <Empty />;
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
  ];

  return (
    <PageContainer title="Center">
      <Row gutter={16}>
        <Col span={4}>
          <ProCard title="Preview">{renderPreview()}</ProCard>
        </Col>
        <Col span={16}>
          <ProTable
            columns={columns}
            request={(params) => listWorkItemFiles(params, { id })}
            rowKey="id"
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default FileCenter;
