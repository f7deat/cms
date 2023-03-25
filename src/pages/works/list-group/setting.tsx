import { saveArguments } from '@/services/work-content';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';

const ListGroupSetting: React.FC = () => {
  const { id } = useParams();

  const onFinish = async (values: API.ListGroup) => {
    const response = await saveArguments(id, values);
    if (response.succeeded) {
      message.success('Saved');
    }
  };

  return (
    <ProForm onFinish={onFinish}>
      <ProFormText name="name" label="Name" />
    </ProForm>
  );
};

export default ListGroupSetting;
