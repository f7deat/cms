import { getEntryPoint } from '@/services/catalog';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const intl = useIntl();

  const [startPoint, setStartPoint] = useState<API.Catalog>();

  useEffect(() => {
    getEntryPoint().then((response) => setStartPoint(response));
  }, []);

  return (
    <PageContainer
      title={intl.formatMessage({
        id: 'menu.home',
      })}
    >
      <Button onClick={() => history.push(`/catalog/${startPoint?.id}`)}>
        Get Started
      </Button>
    </PageContainer>
  );
};

export default HomePage;
