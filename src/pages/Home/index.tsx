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
import { EditOutlined } from '@ant-design/icons';
import {
  DrawerForm,
  ModalForm,
  PageContainer,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Button, Col, message, Row, Typography } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { useEffect, useState } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const [visibleCatalogModal, setVisibleCatalogModal] =
    useState<boolean>(false);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);
  const [components, setComponents] = useState<DefaultOptionType[]>();
  const [catalog, setCatalog] = useState<API.Catalog>();
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
    listWorkItem(catalog?.id).then((response) => {
      setWorkItems(response);
    });
  }, [catalog]);

  const onFinishComponent = async (value: any) => {
    value.catalogId = catalog?.id;
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
          <Catalog catalog={catalog} setCatalog={setCatalog} />
        </Col>
        <Col span={20}>
          <div className="flex justify-between">
            <Typography.Title level={4}>{catalog?.name}</Typography.Title>
            <Button onClick={() => setVisibleComponent(true)}>
              New component
            </Button>
          </div>
          <ProList
            dataSource={workItems}
            metas={{
              title: {
                dataIndex: 'name',
              },
              actions: {
                render: (text, row, index) => [
                  <Button
                    key={index}
                    icon={<EditOutlined />}
                    onClick={() => {
                      if (row.normalizedName === 'Html') {
                        history.push(
                          `/works/${row.normalizedName.toLocaleLowerCase()}`,
                        );
                      }
                      setWorkId(row.id);
                      setVisibleEdit(true);
                    }}
                  />,
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
