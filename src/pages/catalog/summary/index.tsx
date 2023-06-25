import {
  EditOutlined,
  EllipsisOutlined,
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ModalForm, ProCard, ProFormDigit, ProFormText } from '@ant-design/pro-components';
import { Fragment, useEffect, useState } from 'react';
import { CatalogType } from '@/constants';
import { useParams } from '@umijs/max';
import { addCatalog, getCatalog } from '@/services/catalog';
import { message, Image, Empty, Divider, Descriptions, Typography, Button, Space } from 'antd';
import { absolutePath, formatDate } from '@/utils/format';
import TagList from './tag';

const CatalogSummary: React.FC = () => {
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [catalog, setCatalog] = useState<API.Catalog>();

  useEffect(() => {
    getCatalog(id).then((response) => setCatalog(response));
  }, [id]);

  const onFinish = async (values: API.Catalog) => {
    values.active = true;
    const response = await addCatalog(values);
    if (response.succeeded) {
      message.success('Added!');
      setOpen(false);
    } else {
      message.error(response.errors[0].description)
    }
  }
  return (
    <ProCard
      title="Summary"
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <div className="flex items-center justify-center mt-4">
        {!catalog?.thumbnail ? (
          <Empty />
        ) : (
          <Image
            src={absolutePath(catalog?.thumbnail)}
            height={200}
            className="object-fit-cover"
          />
        )}
      </div>
      <Divider />
      <Descriptions title="Information" column={1}>
        <Descriptions.Item label="Lượt xem">
          {catalog?.viewCount}
        </Descriptions.Item>
        <Descriptions.Item label="Created date">
          {formatDate(catalog?.createdDate)}
        </Descriptions.Item>
        <Descriptions.Item label="Modified date">
          {formatDate(catalog?.modifiedDate)}
        </Descriptions.Item>
      </Descriptions>
      {(catalog?.type || CatalogType.Entry) === CatalogType.Tag ? (
        <Fragment />
      ) : (
        <div>
          <Divider />
          <Typography.Title level={5}>Tags</Typography.Title>
          <TagList />
          <Divider dashed />
          <div className='flex justify-center'>
            <Button size='small' type='dashed' onClick={() => setOpen(true)}>
              <Space>
                <PlusOutlined />
                Tạo tag
              </Space>
            </Button>
          </div>
        </div>
      )}
      <ModalForm open={open} onOpenChange={setOpen} onFinish={onFinish} title="Tạo tag">
        <ProFormText name="name" rules={[
          {
            required: true
          }
        ]} label="Name" />
        <ProFormDigit name="type" initialValue={CatalogType.Tag} hidden />
      </ModalForm>
    </ProCard>
  );
};

export default CatalogSummary;
