import Catalog from '@/components/catalog';
import CatalogSetting from '@/components/catalog/settings';
import { addCatalog } from '@/services/catalog';
import { listComponent } from '@/services/component';
import {
  addWorkContent,
  deleteWorkContent,
  listWorkContent,
} from '@/services/work-content';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Col, message, Popconfirm, Row } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import React, { useEffect, useRef, useState } from 'react';

const HomePage: React.FC = () => {
  const actionRef = useRef<ActionType>();

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);
  const [components, setComponents] = useState<DefaultOptionType[]>();
  const [catalogIds, setCatalogIds] = useState<React.Key[]>([]);

  const onFinish = async (values: API.Catalog) => {
    addCatalog(values).then((response) => {
      if (response.succeeded) {
        message.success('Saved!');
        setVisibleCatalogModal(false);
        actionRef.current?.reload();
      }
    });
  };

  useEffect(() => {
    listComponent().then((response) => {
      setComponents(
        response.map((c: any) => {
          return {
            label: c.name,
            value: c.id,
          };
        }),
      );
    });
  }, []);

  useEffect(() => {
    actionRef.current?.reload();
  }, [catalogIds]);

  const onFinishComponent = async (value: any) => {
    value.catalogId = catalogIds[0];
    const response = await addWorkContent(value);
    if (response.succeeded) {
      message.success('Added!');
      setVisibleComponent(false);
      actionRef.current?.reload();
    }
  };

  const onConfirm = async (workContentId: string) => {
    const response = await deleteWorkContent(workContentId, catalogIds[0]);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
    }
  };

  return (
    <PageContainer ghost title={false}>
      <Row gutter={16}>
        <Col span={4}>
          <Catalog catalogIds={catalogIds} setCatalogIds={setCatalogIds} />
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
              <ProList<API.WorkItem>
                actionRef={actionRef}
                request={async () => listWorkContent(catalogIds)}
                headerTitle="Components"
                metas={{
                  title: {
                    dataIndex: 'name',
                  },
                  actions: {
                    render: (text, row) => [
                      <Button
                        key={1}
                        icon={<EditOutlined />}
                        onClick={() => {
                          history.push(
                            `/works/${row.normalizedName.toLocaleLowerCase()}/${
                              row.id
                            }`,
                          );
                        }}
                      />,
                      <Popconfirm
                        title="Are you sure?"
                        key={2}
                        onConfirm={() => onConfirm(row.id)}
                      >
                        <Button icon={<DeleteOutlined />} danger></Button>,
                      </Popconfirm>,
                    ],
                  },
                }}
              ></ProList>
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
          <ModalForm
            visible={visibleComponent}
            title="Component"
            onFinish={onFinishComponent}
            onVisibleChange={setVisibleComponent}
          >
            <ProFormText name="name" label="Name" />
            <ProFormSelect
              options={components}
              name="componentId"
              label="Component"
            ></ProFormSelect>
            <ProFormText name="arguments" hidden={true} />
          </ModalForm>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
