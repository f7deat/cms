import ComponentFormSelect from '@/components/works/component';
import { listSidebarWork, workAddSetting } from '@/services/setting';
import { deleteWorkContentById } from '@/services/work-content';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { FormattedMessage, history } from '@umijs/max';
import { Button, Col, Empty, Popconfirm, Row, message } from 'antd';
import { useRef, useState } from 'react';

const SidebarSetting: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState<boolean>(false);

  const onConfirm = async (id: string) => {
    const response = await deleteWorkContentById(id);
    if (response.succeeded) {
      message.success('Deleted');
      actionRef.current?.reload();
    }
  };

  const onFinish = async (values: any) => {
    const response = await workAddSetting(values);
    if (response.succeeded) {
      message.success('Saved');
      setOpen(false);
      actionRef.current?.reload();
    }
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <ProList<API.WorkItem>
            toolBarRender={() => {
              return [
                <Button
                  key={0}
                  onClick={() => setOpen(true)}
                  type="primary"
                  icon={<PlusOutlined />}
                >
                  <FormattedMessage id="general.new" />
                </Button>,
              ];
            }}
            rowSelection={{}}
            actionRef={actionRef}
            request={listSidebarWork}
            headerTitle="Work items"
            metas={{
              title: {
                dataIndex: 'name',
              },
              actions: {
                render: (text, row) => [
                  <Button
                    key={1}
                    type="primary"
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
                    key={4}
                    onConfirm={() => onConfirm(row.id)}
                  >
                    <Button
                      icon={<DeleteOutlined />}
                      danger
                      type="primary"
                    ></Button>
                    ,
                  </Popconfirm>,
                ],
              },
            }}
          />
        </Col>
        <Col span={8}>
          <Empty />
        </Col>
      </Row>
      <ModalForm open={open} onOpenChange={setOpen} onFinish={onFinish}>
        <ProFormText name="parentId" hidden initialValue={id} />
        <ProFormText name="name" label="Name" />
        <ComponentFormSelect name="componentId" label="Component" />
      </ModalForm>
    </PageContainer>
  );
};

export default SidebarSetting;
