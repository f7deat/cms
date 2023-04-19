import CatalogSummary from '@/pages/catalog/summary';
import { activeCatalog, getCatalog } from '@/services/catalog';
import { BarsOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl, useParams } from '@umijs/max';
import { Button, Col, Dropdown, MenuProps, message, Row } from 'antd';
import { useEffect, useState } from 'react';
import ArticleContent from './content';
import ArticleSetting from './setting';

const ArticleCenter: React.FC = () => {
  const { id } = useParams();
  const intl = useIntl();
  const [catalog, setCatalog] = useState<API.Catalog>();
  const [tab, setTab] = useState<string>('content');

  useEffect(() => {
    getCatalog(id).then((response) => {
      setCatalog(response);
    });
  }, [id]);

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
        <Col md={18}>
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
        <Col md={6}>
          <CatalogSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ArticleCenter;
