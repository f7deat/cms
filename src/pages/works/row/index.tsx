import AddComponent from '@/components/add-component';
import {
  addChildWorkContent,
  addColumn,
  listChildWorkContent,
} from '@/services/work-content';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProCard,
  ProFormSelect,
  ProList,
} from '@ant-design/pro-components';
import { useParams, history } from '@umijs/max';
import { Button, Col, message, Popconfirm, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';

const RowComponent: React.FC = () => {
  const { id } = useParams();

  const actionRef = useRef<ActionType>();

  const [visible, setVisible] = useState<boolean>(false);
  const [columns, setColumns] = useState<API.WorkContent[]>([]);
  const [visibleComponent, setVisibleComponent] = useState<boolean>(false);
  const [columnId, setColumnId] = useState<string>();

  useEffect(() => {
    listChildWorkContent(id).then((response) => {
      setColumns(response.data);
    });
  }, [id]);

  const onFinish = async (values: any) => {
    values.parentId = id;
    const response = await addColumn(values);
    if (response.succeeded) {
      message.success('Added!');
      setVisible(false);
    }
  };

  const onFinishComponent = async (values: any) => {
    if (!columnId) {
      message.warning('Please select column!');
      return;
    }
    const body: any = {
      parentId: columnId,
      active: true,
      componentId: values.componentId,
      name: values.name,
    };
    const response = await addChildWorkContent(body);
    if (response.succeeded) {
      setColumnId('');
      message.success('Saved!');
      setVisibleComponent(false);
      actionRef.current?.reload();
    }
  };

  const handleAddComponent = (id: string) => {
    setColumnId(id);
    setVisibleComponent(true);
  };

  return (
    <PageContainer
      title="Row"
      extra={
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setVisible(true)}
        >
          Add Column
        </Button>
      }
    >
      <Row gutter={16}>
        {columns?.map((column) => (
          <Col
            key={column.id}
            span={column.arguments === 'col-md-8' ? '16' : '8'}
          >
            <ProCard
              extra={
                <Button
                  type="primary"
                  onClick={() => handleAddComponent(column.id)}
                >
                  Add component
                </Button>
              }
            >
              <ProList<API.WorkItem>
                actionRef={actionRef}
                request={() => listChildWorkContent(column.id)}
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
                      <Popconfirm title="Are you sure?" key={2}>
                        <Button icon={<DeleteOutlined />} danger></Button>,
                      </Popconfirm>,
                    ],
                  },
                }}
              />
            </ProCard>
          </Col>
        ))}
      </Row>
      <ModalForm
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onFinish}
      >
        <ProFormSelect
          label="Collumn"
          options={[
            {
              label: '1/3',
              value: 'col-md-4',
            },
            {
              label: '2/3',
              value: 'col-md-8',
            },
          ]}
          name="arguments"
        ></ProFormSelect>
      </ModalForm>
      <AddComponent
        visible={visibleComponent}
        onVisibleChange={setVisibleComponent}
        onFinish={onFinishComponent}
      />
    </PageContainer>
  );
};

export default RowComponent;
