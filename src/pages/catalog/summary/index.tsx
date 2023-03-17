import Gallery from '@/pages/files/gallery';
import { updateThumbnail } from '@/services/catalog';
import { absolutePath, formatDate } from '@/utils/format';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import {
  Space,
  Button,
  Empty,
  Divider,
  Descriptions,
  Typography,
  Image,
  message,
} from 'antd';
import { useState } from 'react';
import TagList from './tag';

type CatalogSummaryProps = {
  catalog?: API.Catalog;
  setCatalog?: any;
};

const CatalogSummary: React.FC<CatalogSummaryProps> = (props) => {
  const { catalog, setCatalog } = props;
  const [open, setOpen] = useState<boolean>(false);

  const onSelect = async (values: API.FileContent) => {
    if (catalog) {
      const nObj = { ...catalog, thumbnail: values.url };
      const response = await updateThumbnail(nObj);
      if (response.succeeded) {
        message.success('Saved!');
        setCatalog(nObj);
      }
      setOpen(false);
    }
  };

  return (
    <ProCard title="Summary">
      <Space>
        <Button icon={<EditOutlined />} onClick={() => setOpen(true)} />
        <Button icon={<DeleteOutlined />} danger type="primary" />
      </Space>
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
      <Divider />
      <Typography.Title level={5}>Tags</Typography.Title>
      <TagList />
      <Gallery open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </ProCard>
  );
};

export default CatalogSummary;
