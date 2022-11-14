import { listSetting } from '@/services/setting';
import { EditOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button } from 'antd';

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
      <ProTable request={listSetting} rowKey="id" columns={columns} />
    </PageContainer>
  );
};

export default SettingPage;
