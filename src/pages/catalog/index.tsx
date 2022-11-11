import AddComponent from '@/components/add-component';
import Catalog from '@/components/catalog';
import CatalogSetting from '@/components/catalog/settings';
import { addCatalog } from '@/services/catalog';
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
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { history } from '@umijs/max';
import { Button, Col, message, Popconfirm, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const CatalogPage: React.FC = () => {
  const { id } = useParams();

  const actionRef = useRef<ActionType>();

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);

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
    actionRef.current?.reload();
  }, [id]);

  const onFinishComponent = async (value: any) => {
    value.catalogId = id;
    const response = await addWorkContent(value);
    if (response.succeeded) {
      message.success('Added!');
      setVisibleComponent(false);
      actionRef.current?.reload();
    }
  };

  const onConfirm = async (workContentId: string) => {
    const response = await deleteWorkContent(workContentId, id);
    if (response.succeeded) {
      message.success('Deleted!');
      actionRef.current?.reload();
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
              <ProList<API.WorkItem>
                actionRef={actionRef}
                request={async () => listWorkContent(id)}
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
