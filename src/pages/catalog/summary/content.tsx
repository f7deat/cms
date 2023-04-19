import { CatalogType } from '@/constants';
import Gallery from '@/pages/files/gallery';
import { getCatalog, updateThumbnail } from '@/services/catalog';
import { absolutePath, formatDate } from '@/utils/format';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useParams } from '@umijs/max';
import {
  message,
  Space,
  Button,
  Empty,
  Divider,
  Descriptions,
  Typography,
  Image,
} from 'antd';
import { useEffect, useState } from 'react';
import TagList from './tag';

const Content: React.FC = () => {
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [catalog, setCatalog] = useState<API.Catalog>();

  const alloweds: number[] = [
    CatalogType.Article,
    CatalogType.Shop,
    CatalogType.Albums,
  ];

  useEffect(() => {
    getCatalog(id).then((response) => setCatalog(response));
  }, [id]);

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
    <div>
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
      {!alloweds.includes(catalog?.type || CatalogType.Article) ? (
        <div></div>
      ) : (
        <div>
          <Divider />
          <Typography.Title level={5}>Tags</Typography.Title>
          <TagList />
        </div>
      )}
      <Gallery open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </div>
  );
};

export default Content;
