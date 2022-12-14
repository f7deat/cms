import {
  addColumn,
  deleteWorkContentById,
  getListColumn,
} from '@/services/work-content';
import {
  FolderOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProFormSelect,
  ProList,
} from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl, useParams } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const RowContent: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    values.parentId = id;
    const response = await addColumn(values);
    if (response.succeeded) {
      message.success('Added!');
      actionRef.current?.reload();
      setVisible(false);
    }
  };

  const onConfirm = async (id: string) => {
    const response = await deleteWorkContentById(id);
    if (response.succeeded) {
      message.success(
        intl.formatMessage({
          id: 'general.deleted',
        }),
      );
    }
  };

  return (
    <div>
      <ProList<API.WorkContent>
        toolBarRender={() => {
          return [
            <Button
              key={0}
              icon={<PlusOutlined />}
              type="primary"
              onClick={() => setVisible(true)}
            >
              <FormattedMessage id="general.new" />
            </Button>,
          ];
        }}
        request={(params) => getListColumn(params, id)}
        actionRef={actionRef}
        rowSelection={{}}
        headerTitle="Column"
        metas={{
          title: {
            dataIndex: 'arguments',
          },
          actions: {
            render: (text, row) => [
              <Button
                type="primary"
                icon={<FolderOutlined />}
                key={0}
                onClick={() => history.push(`/works/column/${row.id}`)}
              ></Button>,
              <Popconfirm
                key={1}
                title="Are you sure?"
                onConfirm={() => onConfirm(row.id)}
              >
                <Button type="primary" danger icon={<DeleteOutlined />} />
              </Popconfirm>,
            ],
          },
        }}
      />
      <ModalForm open={visible} onOpenChange={setVisible} onFinish={onFinish}>
        <ProFormSelect
          label="Collumn"
          options={[
            {
              label: 'col',
              value: 'col',
            },
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
    </div>
  );
};

export default RowContent;
