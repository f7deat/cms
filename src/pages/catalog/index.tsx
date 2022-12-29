import Catalog from '@/components/catalog';
import CatalogSetting from '@/components/catalog/settings';
import WorkContentComponent from '@/components/work-content';
import { addCatalog, getCatalog } from '@/services/catalog';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProCard,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl, useParams } from '@umijs/max';
import { Button, Col, Empty, message, Row } from 'antd';
import React, { useEffect, useState } from 'react';

const CatalogPage: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams();

  const [open, setOpen] = useState<boolean>(false);
  const [catalog, setCatalog] = useState<API.Catalog>();
  const [tab, setTab] = useState('content');

  useEffect(() => {
    getCatalog(id).then((response) => setCatalog(response));
  }, [id]);

  const onFinish = async (values: API.Catalog) => {
    addCatalog(values).then((response) => {
      if (response.succeeded) {
        message.success('Saved!');
        setOpen(false);
      }
    });
  };

  return (
    <PageContainer
      title={catalog?.name}
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
                  key: 'content',
                  children: <WorkContentComponent />,
                },
                {
                  label: intl.formatMessage({
                    id: 'menu.settings',
                  }),
                  key: 'setting',
                  children: <CatalogSetting />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
          ></ProCard>
          <ModalForm onFinish={onFinish} open={open} onOpenChange={setOpen}>
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
