import { getArguments, saveArguments } from '@/services/work-content';
import {
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const WordPress: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getArguments(id).then((response) => {
      if (response.wordPress) {
        formRef.current?.setFields([
          {
            name: 'id',
            value: response.wordPress.id,
          },
          {
            name: 'domain',
            value: response.wordPress.domain,
          },
        ]);
      }
    });
  }, [id]);

  const onFinish = async (values: any) => {
    const data = {
      type: 1,
      wordPress: {
        id: Number(values.id),
        domain: values.domain,
      },
    };
    const response = await saveArguments(id, data);
    if (response.succeeded) {
      message.success('Saved');
    }
  };

  return (
    <ProForm onFinish={onFinish} formRef={formRef}>
      <ProFormText name="id" label="Post ID" />
      <ProFormText name="domain" label="Domain" />
    </ProForm>
  );
};

export default WordPress;
