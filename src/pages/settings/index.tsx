import CatalogList from '@/components/catalog/list';
import { listSetting } from '@/services/setting';
import { CatalogType } from '@/utils/constants';
import { EditOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Col, Row } from 'antd';

const SettingPage: React.FC = () => {
  const columns: ProColumns<API.AppSetting>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: '',
      valueType: 'option',
      render: (dom, entity) => [
        <Button
          icon={<EditOutlined />}
          key={1}
          onClick={() =>
            history.push(
              `/settings/${entity.normalizedName.toLocaleLowerCase()}/${
                entity.id
              }`,
            )
          }
        ></Button>,
      ],
    },
  ];

  return (
    <PageContainer title="Setting">
      <Row gutter={16}>
        <Col span={12}>
          <ProTable request={listSetting} rowKey="id" columns={columns} />
        </Col>
        <Col span={12}>
          <CatalogList type={CatalogType.Setting} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default SettingPage;
