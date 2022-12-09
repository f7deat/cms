import { addColumn, getListColumn } from '@/services/work-content';
import {
  DeleteOutlined,
  FolderOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProFormSelect,
  ProList,
} from '@ant-design/pro-components';
import { FormattedMessage, history, useParams } from '@umijs/max';
import { Button, message } from 'antd';
import { useRef, useState } from 'react';

const RowComponent: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();

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

  return (
    <PageContainer
      title="Row"
      extra={
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setVisible(true)}
        >
          <FormattedMessage id="general.new" />
        </Button>
      }
    >
      <ProList<API.WorkContent>
        request={(params) => getListColumn(params, id)}
        actionRef={actionRef}
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
              <Button
                type="primary"
                danger
                key={1}
                icon={<DeleteOutlined />}
              />,
            ],
          },
        }}
      />

      <ModalForm
        visible={visible}
        onVisibleChange={setVisible}
        onFinish={onFinish}
      >
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
    </PageContainer>
  );
};

export default RowComponent;
