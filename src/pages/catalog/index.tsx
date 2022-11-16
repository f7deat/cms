import Catalog from '@/components/catalog';
import CatalogSetting from '@/components/catalog/settings';
import WorkContentComponent from '@/components/work-content';
import { addCatalog } from '@/services/catalog';
import {
  ModalForm,
  PageContainer,
  ProFormText,
} from '@ant-design/pro-components';
import { Col, message, Row } from 'antd';
import React, { useState } from 'react';

const CatalogPage: React.FC = () => {
  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);

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
          <Row gutter={16}>
            <Col span={16}>
              <WorkContentComponent child={false} />
            </Col>
            <Col span={8}>
              <CatalogSetting />
            </Col>
          </Row>
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
