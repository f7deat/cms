import { getEntryPoint, queryViewCount } from '@/services/catalog';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history } from '@umijs/max';
import { Card, Col, message, Row, Statistic } from 'antd';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const entryPoints = [
    {
      id: 'home',
      name: 'menu.home',
      url: 'catalog',
    },
    {
      id: 'article',
      name: 'menu.article',
      url: 'article/home',
    },
    {
      id: 'shop',
      name: 'menu.shop',
      url: 'shop',
    },
  ];

  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    queryViewCount().then((response) => {
      setViewCount(response);
    });
  }, []);

  const onClick = async (id: string, url: string) => {
    const response = await getEntryPoint(id);
    if (response.succeeded) {
      history.push(`/${url}/${response.data.id}`);
    } else {
      message.error(response.errors[0].description);
    }
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <Card title="Get Started" bordered={false}>
            {entryPoints.map((point) => (
              <Card.Grid
                key={point.name}
                onClick={() => onClick(point.id, point.url)}
              >
                <FormattedMessage id={point.name} />
              </Card.Grid>
            ))}
          </Card>
        </Col>
        <Col span={8}>
          <ProCard title="Thống kê">
            <Statistic title="Lượt xem" value={viewCount} />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
