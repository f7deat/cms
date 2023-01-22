import Explorer from '@/pages/files/explorer';
import { activeCatalog, getCatalog, updateThumbnail } from '@/services/catalog';
import { absolutePath, formatDate } from '@/utils/format';
import { BarsOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl, useParams } from '@umijs/max';
import {
  Button,
  Col,
  Descriptions,
  Dropdown,
  MenuProps,
  message,
  Row,
  Image,
  Divider,
  Space,
  Empty,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';
import ArticleContent from './content';
import ArticleSetting from './setting';

const ArticleCenter: React.FC = () => {
  const { id } = useParams();
  const intl = useIntl();
  const [catalog, setCatalog] = useState<API.Catalog>();
  const [tab, setTab] = useState<string>('content');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getCatalog(id).then((response) => {
      setCatalog(response);
    });
  }, []);

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a
          onClick={() =>
            history.push(
              `${localStorage.getItem('wf_URL')}article/${
                catalog?.normalizedName
              }`,
            )
          }
        >
          <FormattedMessage id="general.preview" />
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          onClick={async () => {
            const response = await activeCatalog(id);
            if (response.succeeded) {
              message.success('Saved!');
            }
          }}
        >
          Xuất bản
        </a>
      ),
    },
    {
      key: '3',
      label: <a>Xóa</a>,
      danger: true,
    },
  ];

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
    <PageContainer
      title={catalog?.name}
      extra={
        <Dropdown menu={{ items }}>
          <Button icon={<BarsOutlined />}></Button>
        </Dropdown>
      }
    >
      <Row gutter={16}>
        <Col span={18}>
          <ProCard
            tabs={{
              tabPosition: 'top',
              activeKey: tab,
              items: [
                {
                  label: 'Content',
                  key: 'content',
                  children: <ArticleContent />,
                },
                {
                  label: intl.formatMessage({
                    id: 'menu.settings',
                  }),
                  key: 'setting',
                  children: <ArticleSetting data={catalog} />,
                },
              ],
              onChange: (key) => {
                setTab(key);
              },
            }}
          />
        </Col>
        <Col span={6}>
          <ProCard title="Thống kê">
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
          </ProCard>
        </Col>
      </Row>
      <Explorer open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </PageContainer>
  );
};

export default ArticleCenter;
