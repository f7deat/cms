import { saveRow } from '@/services/work-content';
import {
  ProForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';

const RowSetting: React.FC = () => {
  const { id } = useParams();

  const onFinish = async (values: any) => {
    values.id = id;
    const response = await saveRow(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <ProForm onFinish={onFinish}>
      <ProFormText name="className" label="Class name" />
      <ProFormSelect
        name="layout"
        label="Layout"
        options={[
          {
            label: 'Full width',
            value: 'container-fluid',
          },
          {
            label: 'Container',
            value: 'container',
          },
        ]}
      />
    </ProForm>
  );
};

export default RowSetting;
