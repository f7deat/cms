import { getRow, saveRow } from '@/services/work-content';
import {
  ProForm,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const RowSetting: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getRow(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'layout',
          value: response.layout,
        },
        {
          name: 'className',
          value: response.className,
        },
      ]);
    });
  }, []);

  const onFinish = async (values: any) => {
    values.id = id;
    const response = await saveRow(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <ProForm onFinish={onFinish} formRef={formRef}>
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
      <ProFormSelect
        name="gap"
        label="Gap"
        options={[
          {
            label: '0',
            value: 'gap-0',
          },
          {
            label: '4',
            value: 'gap-4',
          },
        ]}
      />
    </ProForm>
  );
};

export default RowSetting;
