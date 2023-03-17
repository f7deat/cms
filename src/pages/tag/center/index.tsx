import CatalogSummary from '@/pages/catalog/summary';
import { getCatalog, listByTag } from '@/services/catalog';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { useParams, history } from '@umijs/max';
import { Button, Col, Popconfirm, Row } from 'antd';
import { useEffect, useState } from 'react';

const TagCenter: React.FC = () => {
  const { id } = useParams();
  const [catalog, setCatalog] = useState<API.Catalog>();

  useEffect(() => {
    getCatalog(id).then((response) => {
      setCatalog(response);
    });
  }, [id]);

  const columns: ProColumns<API.Catalog>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'View count',
      dataIndex: 'viewCount',
      search: false,
      valueType: 'digit',
    },
    {
      title: 'Modified date',
      dataIndex: 'modifiedDate',
      valueType: 'fromNow',
      search: false,
    },
    {
      title: 'Active',
      dataIndex: 'active',
      valueEnum: {
        false: {
          text: 'Draft',
          status: 'Default',
        },
        true: {
          text: 'Active',
          status: 'Processing',
        },
      },
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Button
          icon={<EditOutlined />}
          key={1}
          type="primary"
          onClick={() => history.push(`/article/center/${entity.id}`)}
        ></Button>,
        <Popconfirm title="Are you sure?" key={2}>
          <Button icon={<DeleteOutlined />} type="primary" danger />
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer title={catalog?.name}>
      <Row gutter={16}>
        <Col span={16}>
          <ProTable
            rowKey="id"
            request={(params) => listByTag(id, params)}
            columns={columns}
          />
        </Col>
        <Col span={8}>
          <CatalogSummary catalog={catalog} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default TagCenter;
