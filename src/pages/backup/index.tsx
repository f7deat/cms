import { getExportData, getStatistic } from '@/services/backup';
import { DownloadOutlined } from '@ant-design/icons';
import { PageContainer, ProCard, Statistic } from '@ant-design/pro-components';
import { Button, Col, Row } from 'antd';
import { useEffect, useState } from 'react';

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
    </PageContainer>
  );
};

export default Backup;
