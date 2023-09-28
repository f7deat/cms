import WorkSummary from '@/components/works/summary';
import { deleteWork, getArguments, saveArguments } from '@/services/work-content';
import { ActionType, PageContainer, ProCard, ProForm, ProFormInstance, ProFormText, ProList } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, Popconfirm, Row, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { DeleteOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import ModalLink from '@/components/modals/link';
import { FormattedMessage } from '@umijs/max';
import { uuidv4 } from '@/utils/common';

const ListGroup: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<API.ListGroup>();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getArguments(id).then((response) => {
      setData(response);
      formRef.current?.setFields([
        {
          name: 'name',
          value: response.name
        }
      ])
    });
  }, [id]);

  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState<boolean>(false);

  const onConfirm = async (itemId: string) => {
    let newData = data;
    if (newData) {
      const items = newData.items.filter(x => x.id !== itemId);
      newData.items = items;
      const response = await saveArguments(id, newData);
      if (response.succeeded) {
        message.success('Deleted!');
        setData(newData);
        actionRef.current?.reload();
      }

    }
  };

  const addLink = async (values: any) => {
    let newData = data;
    let item = {
      id: uuidv4(),
      link: {
        href: values.href,
        name: values.name,
        target: values.target,
        id: uuidv4()
      }
    }
    if (newData?.items) {
      newData?.items?.push(item)
    } else {
      newData!.items = [item];
    }
    const response = await saveArguments(id, newData);
    if (response.succeeded) {
      setData(newData);
      message.success('Added!')
      setOpen(false);
    }
  };

  const onFinish = async (values: any) => {
    let newData: API.ListGroup = {
      name: '',
      items: []
    };
    if (data) {
      newData = data;
    }
    newData.name = values.name;
    const response = await saveArguments(id, newData);
    if (response.succeeded) {
      setData(newData);
      message.success('Saved!')
    }
  }

  return (
    <PageContainer title={data?.name}>
      <Row gutter={16}>
        <Col span={16}>
          <ProCard>
            <ProForm formRef={formRef} onFinish={onFinish}>
              <ProFormText name="name" label="Name" rules={[
                {
                  required: true
                }
              ]} />
              <ProList<API.ListGroupItem>
                toolBarRender={() => {
                  return [
                    <Button
                      key={0}
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={() => setOpen(true)}
                    >
                      <span><FormattedMessage id="general.new" /></span>
                    </Button>
                  ];
                }}
                ghost
                headerTitle="Item"
                dataSource={data?.items}
                metas={{
                  title: {
                    render: (dom, entity) => entity.link?.name
                  },
                  actions: {
                    render: (dom, entity) => [
                      <Popconfirm
                        title="Are you sure?"
                        onConfirm={() => onConfirm(entity.id)}
                        key={2}
                      >
                        <Button icon={<DeleteOutlined />} danger type="primary" />
                      </Popconfirm>,
                    ],
                  },
                }}
                actionRef={actionRef}
                className='mb-4'
              />
            </ProForm>
          </ProCard>

          <ModalLink open={open} onOpenChange={setOpen} onFinish={addLink} />
        </Col>
        <Col span={8}>
          <WorkSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ListGroup;
