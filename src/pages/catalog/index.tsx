import Catalog from '@/components/catalog';
import CatalogSetting from '@/components/catalog/settings';
import WorkContentComponent from '@/components/work-content';
import { addCatalog } from '@/services/catalog';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProCard,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl } from '@umijs/max';
import { Button, Col, Empty, message, Row } from 'antd';
import React, { useState } from 'react';

const CatalogPage: React.FC = () => {
  const intl = useIntl();

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [tab, setTab] = useState('tab1');

  const onFinish = async (values: API.Catalog) => {
    addCatalog(values).then((response) => {
      if (response.succeeded) {
        message.success('Saved!');
        setVisibleCatalogModal(false);
      }
    });
  };

  return (
    <PageContainer
      extra={
        <Button icon={<ArrowLeftOutlined />} onClick={() => history.back()}>
          <FormattedMessage id="general.back" />
        </Button>
      }
    >
      <Row gutter={16}>
        <Col span={6}>
          <Catalog />
        </Col>
        <Col span={12}>
          <ProCard
            tabs={{
              tabPosition: 'top',
              activeKey: tab,
              items: [
                {
                  label: 'Content',
                  key: 'tab1',
                  children: <WorkContentComponent />,
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
            open={visibleCatalogModal}
            onOpenChange={setVisibleCatalogModal}
          >
            <ProFormText name="name" label="Name" />
            <ProFormText name="normalizedName" label="Normalized Name" />
          </ModalForm>
        </Col>
        <Col span={6}>
          <ProCard>
            <Empty />
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default CatalogPage;
