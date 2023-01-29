import { getCatalog, listTypes, saveCatalog } from '@/services/catalog';
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
import { useEffect, useRef, useState } from 'react';

const CatalogSetting: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();

  const [types, setTypes] = useState<any>();

  useEffect(() => {
    listTypes().then((response) => {
      setTypes(response);
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
            name: 'description',
            value: response.description,
          },
          {
            name: 'normalizedName',
            value: response.normalizedName,
          },
          {
            name: 'type',
            value: response.type.toString(),
          },
          {
            name: 'active',
            value: response.active,
          },
        ]);
      });
    });
  }, [id]);

  const onFinish = async (values: API.Catalog) => {
    values.type = Number(values.type);
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
      <ProFormSelect name="type" label="Type" options={types}></ProFormSelect>
      <ProFormCheckbox name="active" label="Active" />
    </ProForm>
  );
};

export default CatalogSetting;
