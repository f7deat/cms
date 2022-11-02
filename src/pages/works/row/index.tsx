import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const RowComponent: React.FC = () => {
  return (
    <PageContainer
      title="Row"
      extra={
        <Button icon={<PlusOutlined />} type="primary">
          Add Column
        </Button>
      }
    >
      <ModalForm></ModalForm>
    </PageContainer>
  );
};

export default RowComponent;
