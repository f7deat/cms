import { addColumn } from '@/services/work-content';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProFormSelect,
  ProList,
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { useState } from 'react';

const RowComponent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    const response = await addColumn(values);
    if (response.succeeded) {
      message.success('Added!');
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
          Add Column
        </Button>
      }
    >
      <ProList></ProList>
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
          name="collumn"
        ></ProFormSelect>
      </ModalForm>
    </PageContainer>
  );
};

export default RowComponent;
