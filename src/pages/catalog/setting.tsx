import { getCatalog, saveCatalog } from '@/services/catalog';
import { FolderOutlined, UploadOutlined } from '@ant-design/icons';
import {
  ProForm,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, Row, Space, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import FormCatalogType from '@/components/form/catalog-type';
import FileExplorer from '@/components/file-explorer';
import FormCatalogList from '@/components/form/catalog-list';
import WfUpload from '@/components/file-explorer/upload';

const CatalogSetting: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();
  const [open, setOpen] = useState<boolean>(false);
  const [upload, setUpload] = useState<boolean>(false);

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
        {
          name: 'parentId',
          value: response.parentId
        }
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
        <Row gutter={16}>
          <Col span={16}>
            <FormCatalogList name="parentId" label="Parent" />
          </Col>
          <Col span={8}>
            <FormCatalogType name="type" label="Type" />
          </Col>
        </Row>
        <ProFormText name="thumbnail" label="Thumbnail" addonAfter={<Space>
          <Button icon={<UploadOutlined />} onClick={() => setUpload(true)}>Upload</Button>
          <Button icon={<FolderOutlined />} type='dashed' onClick={() => setOpen(true)}>File explorer</Button>
        </Space>} />
        <ProFormCheckbox name="active" label="Active" />
      </ProForm>
      <FileExplorer open={open} onOpenChange={setOpen} onSelect={onSelect} />
      <WfUpload open={upload} onCancel={setUpload} onFinish={() => {}} />
    </div>
  );
};

export default CatalogSetting;
