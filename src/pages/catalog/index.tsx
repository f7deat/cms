import Catalog from '@/components/catalog';
import CatalogSetting from '@/components/catalog/settings';
import WorkContentComponent from '@/components/work-content';
import { addCatalog } from '@/services/catalog';
import {
  ModalForm,
  PageContainer,
  ProCard,
  ProFormText,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Col, message, Row } from 'antd';
import React, { useState } from 'react';

const CatalogPage: React.FC = () => {
  const intl = useIntl();

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [tab, setTab] = useState('tab2');

  const onFinish = async (values: API.Catalog) => {
    addCatalog(values).then((response) => {
      if (response.succeeded) {
        message.success('Saved!');
        setVisibleCatalogModal(false);
      }
    });
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={4}>
          <Catalog />
        </Col>
        <Col span={20}>
          <ProCard
            tabs={{
              tabPosition: 'top',
              activeKey: tab,
              items: [
                {
                  label: 'Content',
                  key: 'tab1',
                  children: <WorkContentComponent child={false} />,
                },
                {
                  label: intl.formatMessage({
                    id: 'menu.settings',
                  }),
                  key: 'tab2',
                  children: <CatalogSetting />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
          ></ProCard>
          <ModalForm
            onFinish={onFinish}
            visible={visibleCatalogModal}
            onVisibleChange={setVisibleCatalogModal}
          >
            <ProFormText name="name" label="Name" />
            <ProFormText name="normalizedName" label="Normalized Name" />
          </ModalForm>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default CatalogPage;
