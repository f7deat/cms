import { getEntryPoint } from '@/services/catalog';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { useIntl } from '@umijs/max';
import { Card, message } from 'antd';

const HomePage: React.FC = () => {
  const entryPoints = ['home', 'article', 'shop'];

  const intl = useIntl();

  const onClick = async (normalizedName: string) => {
    const response = await getEntryPoint(normalizedName);
    if (response.succeeded) {
      history.push(`/catalog/${response.data.id}`);
    } else {
      message.error(response.errors[0].description);
    }
  };

  return (
    <PageContainer
      title={intl.formatMessage({
        id: 'menu.home',
      })}
    >
      <Card title="Get Started">
        {entryPoints.map((normalizedName) => (
          <Card.Grid
            key={normalizedName}
            onClick={() => onClick(normalizedName)}
          >
            {normalizedName}
          </Card.Grid>
        ))}
      </Card>
    </PageContainer>
  );
};

export default HomePage;
