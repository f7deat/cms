import { getEntryPoint } from '@/services/catalog';
import { PageContainer } from '@ant-design/pro-components';
import { FormattedMessage, history } from '@umijs/max';
import { Card, message } from 'antd';

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
      <Card title="Get Started">
        {entryPoints.map((point) => (
          <Card.Grid
            key={point.name}
            onClick={() => onClick(point.id, point.url)}
          >
            <FormattedMessage id={point.name} />
          </Card.Grid>
        ))}
      </Card>
    </PageContainer>
  );
};

export default HomePage;
