import AddComponent from '@/components/add-component';
import Catalog from '@/components/catalog';
import CatalogSetting from '@/components/catalog/settings';
import WorkContentComponent from '@/components/work-content';
import { addCatalog } from '@/services/catalog';
import { addWorkContent } from '@/services/work-content';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, message, Row } from 'antd';
import React, { useState } from 'react';

const CatalogPage: React.FC = () => {
  const { id } = useParams();

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);

  const onFinish = async (values: API.Catalog) => {
    addCatalog(values).then((response) => {
      if (response.succeeded) {
        message.success('Saved!');
        setVisibleCatalogModal(false);
      }
    });
  };

  const onFinishComponent = async (value: any) => {
    value.catalogId = id;
    const response = await addWorkContent(value);
    if (response.succeeded) {
      message.success('Added!');
      setVisibleComponent(false);
    }
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
              <div className="flex justify-between mb-2">
                <Button
                  onClick={() => setVisibleComponent(true)}
                  type="primary"
                  icon={<PlusOutlined />}
                >
                  New component
                </Button>
              </div>
              <WorkContentComponent />
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
          <AddComponent
            visible={visibleComponent}
            onVisibleChange={setVisibleComponent}
            onFinish={onFinishComponent}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default CatalogPage;
