import { listSetting, saveLayoutHead } from '@/services/setting';
import { EditOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProColumns,
  ProForm,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Col, message, Row } from 'antd';

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

  const onFinish = async (values: any) => {
    const response = await saveLayoutHead(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer title="Setting">
      <Row gutter={16}>
        <Col span={12}>
          <ProTable request={listSetting} rowKey="id" columns={columns} />
        </Col>
        <Col span={12}>
          <ProCard>
            <ProForm onFinish={onFinish}>
              <ProFormText name="titleSuffix" label="Title suffix" />
            </ProForm>
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default SettingPage;
