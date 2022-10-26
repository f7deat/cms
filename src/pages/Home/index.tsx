import Guide from '@/components/Guide';
import { addCatalog, listCatalog } from '@/services/catalog';
import { trim } from '@/utils/format';
import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Col, message, Row } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const [catalogs, setCatalogs] = useState<API.Catalog[]>([]);

  useEffect(() => {
    listCatalog().then((response) => {
      setCatalogs(response);
    });
  }, []);

  const onFinish = async (values: API.Catalog) => {
    addCatalog(values).then((response) => {
      if (response.succeeded) {
        message.success('Saved!');
      }
    });
  };

  return (
    <PageContainer ghost>
      <Row>
        <Col span={4}>
          {catalogs?.map((catalog) => (
            <div key={catalog.normalizedName}>{catalog.name}</div>
          ))}
        </Col>
        <Col span={20}>
          <div className={styles.container}>
            <Guide name={trim(name)} />
          </div>
          <ProForm onFinish={onFinish}>
            <ProFormText name="name" label="Name" />
            <ProFormText name="normalizedName" label="Normalized Name" />
          </ProForm>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
