import AddComponent from '@/components/add-component';
import {
  addItem,
  addWorkContent,
  deleteWorkContent,
  listTag,
  listWorkContent,
} from '@/services/work-content';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  TagOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProFormSelect,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { FormattedMessage, useParams, history } from '@umijs/max';
import { message, Button, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const ArticleContent: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();

  const [open, setOpen] = useState<boolean>(false);
  const [openT, setOpenT] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    values.catalogId = id;
    const response = await addWorkContent(values);
    if (response.succeeded) {
      message.success('Added!');
      setOpen(false);
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

  const onAddTag = async (values: any) => {
    const response = await addItem(values);
    if (response.succeeded) {
      message.success('Saved!');
      setOpenT(false);
      actionRef.current?.reload();
    }
  };

  return (
    <div>
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
            <Button
              key={1}
              icon={<TagOutlined />}
              onClick={() => setOpenT(true)}
            >
              Tag
            </Button>,
          ];
        }}
        rowSelection={{}}
        actionRef={actionRef}
        request={async () => listWorkContent(id)}
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
      <AddComponent open={open} onOpenChange={setOpen} onFinish={onFinish} />
      <ModalForm open={openT} onOpenChange={setOpenT} onFinish={onAddTag}>
        <ProFormText name="catalogId" initialValue={id} hidden />
        <ProFormSelect
          showSearch
          request={listTag}
          label="Tag"
          name="workContentId"
        />
      </ModalForm>
    </div>
  );
};

export default ArticleContent;
