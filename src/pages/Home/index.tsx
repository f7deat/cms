import { getEntryPoint } from '@/services/catalog';
import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import Explorer from '../files/explorer';

const HomePage: React.FC = () => {
  const intl = useIntl();

  const [startPoint, setStartPoint] = useState<API.Catalog>();
  const [visible, setVisible] = useState<boolean>(false);

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
      <Button onClick={() => setVisible(true)}>File Explorer</Button>
      <Explorer visible={visible} onVisibleChange={setVisible} />
    </PageContainer>
  );
};

export default HomePage;
