import { getCatalog, saveCatalog } from '@/services/catalog';
import {
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Divider, message } from 'antd';
import { useEffect, useRef } from 'react';

const CatalogSetting: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getCatalog(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'id',
          value: response.id,
        },
        {
          name: 'name',
          value: response.name,
        },
        {
          name: 'normalizedName',
          value: response.normalizedName,
        },
        {
          name: 'title',
          value: response.setting.title,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: any) => {
    const setting: API.CatalogSetting = {
      title: values.title,
    };
    values.setting = setting;
    const response = await saveCatalog(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <ProCard title="Settings">
      <ProForm formRef={formRef} onFinish={onFinish}>
        <ProFormText name="id" hidden />
        <ProFormText name="name" label="Name" />
        <ProFormText name="normalizedName" label="Normalized name" />
        <ProFormTextArea name="description" label="Description" />
        <Divider />
        <ProFormText name="title" label="Title" />
      </ProForm>
    </ProCard>
  );
};

export default CatalogSetting;
