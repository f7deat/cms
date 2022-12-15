import { CatalogType } from '@/constants';
import { getCatalog, saveCatalog } from '@/services/catalog';
import {
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormSelect,
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
        {
          name: 'container',
          value: response.setting.container,
        },
        {
          name: 'type',
          value: response.type,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: any) => {
    const setting: API.CatalogSetting = {
      title: values.title,
      container: values.container,
    };
    values.setting = setting;
    const response = await saveCatalog(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <ProForm formRef={formRef} onFinish={onFinish}>
      <ProFormText name="id" hidden />
      <ProFormText name="name" label="Name" />
      <ProFormText name="normalizedName" label="Normalized name" />
      <ProFormTextArea name="description" label="Description" />
      <ProFormSelect
        name="type"
        label="Type"
        options={[
          {
            label: 'Page',
            value: CatalogType.Default,
          },
          {
            label: 'Setting',
            value: CatalogType.Setting,
          },
          {
            label: 'Home',
            value: CatalogType.Entry,
          },
        ]}
      ></ProFormSelect>
      <Divider />
      <ProFormText name="title" label="Title" />
      <ProFormCheckbox name="container" label="Container" />
    </ProForm>
  );
};

export default CatalogSetting;
