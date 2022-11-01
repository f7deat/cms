import Catalog from '@/components/catalog';
import Guide from '@/components/Guide';
import { addCatalog } from '@/services/catalog';
import { listComponent } from '@/services/component';
import {
  addWorkContent,
  deleteWorkContent,
  listWorkContent,
  updateTitle,
  updateWorkContent,
} from '@/services/work-content';
import { trim } from '@/utils/format';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  DrawerForm,
  ModalForm,
  PageContainer,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Button, Col, message, Popconfirm, Row } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const actionRef = useRef<ActionType>();

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);
  const [components, setComponents] = useState<DefaultOptionType[]>();
  const [catalogIds, setCatalogIds] = useState<React.Key[]>([]);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);
  const [workId, setWorkId] = useState<string>();

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

  const onFinishEdit = async (values: any) => {
    if (values.html) {
      values.id = values.workId;
      values.arguments = values.label;
      await updateWorkContent(values);
      return;
    }
    const response = await updateTitle(values);
    if (response.succeeded) {
      message.success('Saved!');
      setVisibleEdit(false);
    }
  };

  const onConfirm = async (id: string) => {
    const response = await deleteWorkContent(id);
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
                      if (row.normalizedName === 'Html') {
                        history.push(`/works/html/${row.id}`);
                      }
                      setWorkId(row.id);
                      setVisibleEdit(true);
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
            <ProFormText name="name" label="Name" />
            <ProFormSelect
              options={components}
              name="componentId"
              label="Component"
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
