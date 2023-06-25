import { getCatalog, saveCatalog } from '@/services/catalog';
import { FolderOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Gallery from '../files/gallery';
import FormCatalogType from '@/components/form/catalog-type';

const CatalogSetting: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();
  const [open, setOpen] = useState<boolean>(false);

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
            name: 'description',
            value: response.description,
          },
          {
            name: 'thumbnail',
            value: response.thumbnail,
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
  }, [id]);

  const onFinish = async (values: API.Catalog) => {
    values.type = Number(values.type);
    const response = await saveCatalog(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  const onSelect = (values: API.FileContent) => {
    formRef.current?.setFieldValue('thumbnail', values.url);
    setOpen(false);
  }

  return (
    <div>
      <ProForm formRef={formRef} onFinish={onFinish}>
        <ProFormText name="id" hidden />
        <ProFormText name="name" label="Name" rules={[
          {
            required: true
          }
        ]} />
        <ProFormText name="normalizedName" label="Normalized name" rules={[
          {
            required: true
          }
        ]} />
        <ProFormTextArea name="description" label="Description" />
        <ProFormText name="thumbnail" label="Thumbnail" width="lg" addonAfter={<Button icon={<FolderOutlined />} onClick={() => setOpen(true)}>File explorer</Button>} />
        <FormCatalogType name="type" label="Type" />
        <ProFormCheckbox name="active" label="Active" />
      </ProForm>
      <Gallery open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </div>
  );
};

export default CatalogSetting;
