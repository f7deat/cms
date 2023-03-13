import { activeCatalog, updateThumbnail } from '@/services/catalog';
import { absolutePath, formatDate } from '@/utils/format';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ProCard } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import {
  Space,
  Button,
  Empty,
  Divider,
  Descriptions,
  Typography,
  Image,
  message,
  Switch,
} from 'antd';
import { useState } from 'react';
import Gallery from '../files/gallery';

type CatalogSummaryProps = {
  catalog?: API.Catalog;
  setCatalog?: any;
};

const CatalogSummary: React.FC<CatalogSummaryProps> = (props) => {
  const { catalog, setCatalog } = props;
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(catalog?.active ?? false);

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

  const onChange = async () => {
    const response = await activeCatalog(id);
    if (response.succeeded) {
      setActive(!active);
      message.success('Saved!');
    }
  };

  return (
    <ProCard
      title="Summary"
      extra={<Switch onChange={onChange} checked={active} />}
    >
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
      <Gallery open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </ProCard>
  );
};

export default CatalogSummary;
