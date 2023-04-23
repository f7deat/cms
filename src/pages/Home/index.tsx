import CatalogList from '@/components/catalog/list';
import { CatalogType } from '@/constants';
import { dataPieChart, queryViewCount } from '@/services/catalog';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Col, Divider, Row, Statistic } from 'antd';
import { PieChart } from 'bizcharts';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [viewCount, setViewCount] = useState<number>(0);
  const [dataPie, setDataPie] = useState<any>([])

  useEffect(() => {
    queryViewCount().then((response) => {
      setViewCount(response);
    });
    dataPieChart().then(response => {
      setDataPie(response);
    })
  }, []);

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <CatalogList type={CatalogType.Entry} />
        </Col>
        <Col span={8}>
          <Row gutter={16}>
            <Col span={12}>
              <ProCard>
                <Statistic title="Lượt xem" value={viewCount} />
              </ProCard>
            </Col>
            <Col span={12}>
              <ProCard>
                <Statistic title="Bài viết" value={0} />
              </ProCard>
            </Col>
          </Row>
          <Divider />
          <ProCard title="Catalog with statistics">
            <PieChart
              angleField='value'
              colorField='label'
              radius={1}
              innerRadius={0.55}
              data={dataPie} />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
