import { getColumn, saveColumn } from '@/services/work-content';
import {
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const ColumnSetting: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getColumn(id).then((response) => {
      if (response) {
        formRef.current?.setFields([
          {
            name: 'className',
            value: response.className,
          },
        ]);
      }
    });
  }, [id]);

  const onFinish = async (values: API.Column) => {
    const response = await saveColumn(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <ProForm formRef={formRef} onFinish={onFinish}>
      <ProFormText name="id" hidden initialValue={id} />
      <ProFormText name="className" label="Class name" />
    </ProForm>
  );
};

export default ColumnSetting;
