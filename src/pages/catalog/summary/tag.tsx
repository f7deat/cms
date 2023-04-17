import { CatalogType } from '@/constants';
import { addCatalog, listTagById, listTagSelect } from '@/services/catalog';
import { addItem, deleteItem } from '@/services/work-content';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Tag, Button, Divider, message } from 'antd';
import { useEffect, useState } from 'react';

const TagList: React.FC = () => {
  const { id } = useParams();
  const [tags, setTags] = useState<API.Catalog[]>();
  const [open, setOpen] = useState<boolean>(false);

  const fetchTag = () => {
    listTagById(id).then((response) => {
      setTags(response);
    });
  };

  useEffect(() => {
    fetchTag();
  }, []);

  const onFinish = async (values: API.Catalog) => {
    values.type = CatalogType.Tag;
    let response = undefined;
    if (values.id) {
      response = await addItem({
        workId: id,
        catalogId: values.id,
      });
      fetchTag();
    } else {
      values.active = true;
      response = await addCatalog(values);
    }
    if (response.succeeded) {
      message.success('Saved!');
      fetchTag();
      setOpen(false);
    } else {
      message.error(response.errors[0].description);
    }
  };

  const onClose = async (tagId: string) => {
    const response = await deleteItem({
      catalogId: id,
      workId: tagId,
      sortOrder: 0,
    });
    if (response.succeeded) {
      const newTags = tags?.filter((tag) => tag.id !== tagId);
      setTags(newTags);
      message.success('Deleted');
    } else {
      message.error(response.errors[0].description);
    }
  };

  return (
    <div>
      {tags?.map((tag) => (
        <Tag key={tag.id} closable onClose={() => onClose(tag.id)}>
          {tag.name}
        </Tag>
      ))}
      <Button
        icon={<PlusOutlined />}
        size="small"
        type="dashed"
        onClick={() => setOpen(true)}
      >
        New tag
      </Button>
      <ModalForm open={open} onOpenChange={setOpen} onFinish={onFinish}>
        <ProFormSelect
          showSearch
          request={listTagSelect}
          name="id"
          label="Select"
        />
        <Divider>Or</Divider>
        <ProFormText label="New" name="name" />
      </ModalForm>
    </div>
  );
};

export default TagList;
