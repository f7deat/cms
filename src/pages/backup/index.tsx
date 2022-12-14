import { getExportData, getStatistic, importData } from '@/services/backup';
import { DownloadOutlined, InboxOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, Statistic } from '@ant-design/pro-components';
import { Button, Col, Divider, message, Row, Upload, UploadProps } from 'antd';
import { useEffect, useState } from 'react';

const { Dragger } = Upload;

const Backup: React.FC = () => {
  const [statistic, setStatistic] = useState<API.Statistic>();

  useEffect(() => {
    getStatistic().then((response) => {
      setStatistic(response);
    });
  }, []);

  const exportData = async () => {
    const response = await getExportData();
    const blob = new Blob([JSON.stringify(response)], {
      type: 'application/json',
    });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `file-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const props: UploadProps = {
    action: importData,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <PageContainer
      title="Backup"
      extra={
        <Button type="primary" icon={<DownloadOutlined />} onClick={exportData}>
          Export
        </Button>
      }
    >
      <Row gutter={16}>
        <Col span={4}>
          <ProCard>
            <Statistic title="Catalog" value={statistic?.catalog} />
          </ProCard>
        </Col>
        <Col span={4}>
          <ProCard>
            <Statistic title="Component" value={statistic?.component} />
          </ProCard>
        </Col>
        <Col span={4}>
          <ProCard>
            <Statistic title="Work content" value={statistic?.workContent} />
          </ProCard>
        </Col>
        <Col span={4}>
          <ProCard>
            <Statistic title="Work item" value={statistic?.workItem} />
          </ProCard>
        </Col>
        <Col span={4}>
          <ProCard>
            <Statistic title="File" value={statistic?.fileContent} />
          </ProCard>
        </Col>
        <Col span={4}>
          <ProCard>
            <Statistic title="File item" value={statistic?.fileItem} />
          </ProCard>
        </Col>
      </Row>
      <Divider />
      <ProCard title="Import">
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </ProCard>
    </PageContainer>
  );
};

export default Backup;
