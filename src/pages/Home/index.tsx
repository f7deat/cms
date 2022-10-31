import Catalog from '@/components/catalog';
import Guide from '@/components/Guide';
import { addCatalog } from '@/services/catalog';
import { listComponent } from '@/services/component';
import {
  addWorkItem,
  listWorkItem,
  updateTitle,
  updateWorkItem,
} from '@/services/work-item';
import { trim } from '@/utils/format';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ModalForm,
  PageContainer,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Button, Col, message, Row } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import React, { useEffect, useState } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);
  const [components, setComponents] = useState<DefaultOptionType[]>();
  const [catalogIds, setCatalogIds] = useState<React.Key[]>([]);
  const [workItems, setWorkItems] = useState<API.WorkItem[]>([]);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const [workId, setWorkId] = useState<string>();

  const onFinish = async (values: API.Catalog) => {
    addCatalog(values).then((response) => {
      if (response.succeeded) {
        message.success('Saved!');
        setVisibleCatalogModal(false);
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
    listWorkItem(catalogIds).then((response) => {
      setWorkItems(response);
    });
  }, [catalogIds]);

  const onFinishComponent = async (value: any) => {
    value.catalogId = catalogIds[0];
    const response = await addWorkItem(value);
    if (response.succeeded) {
      message.success('Added!');
      setVisibleComponent(false);
    }
  };

  const onFinishEdit = async (values: any) => {
    if (values.html) {
      values.id = values.workId;
      values.arguments = values.label;
      await updateWorkItem(values);
      return;
    }
    const response = await updateTitle(values);
    if (response.succeeded) {
      message.success('Saved!');
      setVisibleEdit(false);
    }
  };

  return (
    <PageContainer ghost title={false}>
      <Row gutter={16}>
        <Col span={4}>
          <Catalog catalogIds={catalogIds} setCatalogIds={setCatalogIds} />
        </Col>
        <Col span={20}>
          <div className="flex justify-between mb-2">
            <Button
              onClick={() => setVisibleComponent(true)}
              type="primary"
              icon={<PlusOutlined />}
            >
              New component
            </Button>
          </div>
          <ProList
            dataSource={workItems}
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
                      if (row.normalizedName === 'Html') {
                        history.push(`/works/html/${row.workId}`);
                      }
                      setWorkId(row.workId);
                      setVisibleEdit(true);
                    }}
                  />,
                  <Button key={2} icon={<DeleteOutlined />} danger></Button>,
                ],
              },
            }}
          ></ProList>
          <div className={styles.container}>
            <Guide name={trim(name)} />
          </div>
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
            <ProFormSelect
              options={components}
              name="componentId"
            ></ProFormSelect>
            <ProFormText name="arguments" hidden={true} />
          </ModalForm>

          <DrawerForm
            visible={visibleEdit}
            onVisibleChange={setVisibleEdit}
            onFinish={onFinishEdit}
          >
            <ProFormText
              label="WorkId"
              name="workId"
              initialValue={workId}
              disabled
            />
            <ProFormText label="Label" name="label" />
            <ProFormText label="Html" name="html" initialValue={true} />
          </DrawerForm>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
