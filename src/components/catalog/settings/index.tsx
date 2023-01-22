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
import { message } from 'antd';
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
          name: 'type',
          value: response.type,
        },
        {
          name: 'active',
          value: response.active,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: any) => {
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
      <ProFormCheckbox name="active" label="Active" />
    </ProForm>
  );
};

export default CatalogSetting;
