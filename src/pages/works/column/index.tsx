import AddComponent from '@/components/add-component';
import { addChildWorkContent, getChildList } from '@/services/work-content';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  ActionType,
  PageContainer,
  ProCard,
  ProList,
} from '@ant-design/pro-components';
import { FormattedMessage, useParams, history } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef, useState } from 'react';

const WfColumn: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();

  const [visible, setVisible] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    const body: API.WorkContent = {
      parentId: id,
      ...values,
    };
    const response = await addChildWorkContent(body);
    if (response.succeeded) {
      message.success('Added!');
      actionRef.current?.reload();
      setVisible(false);
    }
  };

  return (
    <PageContainer
      title="Column"
      extra={
        <Button
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setVisible(true)}
        >
          <FormattedMessage id="general.new" />
        </Button>
      }
    >
      <ProCard>
        <ProList<API.WorkItem>
          request={(params) => getChildList(params, id)}
          actionRef={actionRef}
          metas={{
            title: {
              dataIndex: 'name',
            },
            actions: {
              render: (text, row) => [
                <Button
                  key={1}
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => {
                    history.push(
                      `/works/${row.normalizedName.toLocaleLowerCase()}/${
                        row.id
                      }`,
                    );
                  }}
                />,
                <Button key={2} icon={<ArrowUpOutlined />}></Button>,
                <Button key={3} icon={<ArrowDownOutlined />}></Button>,
                <Popconfirm title="Are you sure?" key={4}>
                  <Button
                    icon={<DeleteOutlined />}
                    danger
                    type="primary"
                  ></Button>
                  ,
                </Popconfirm>,
              ],
            },
          }}
        />
      </ProCard>
      <AddComponent
        open={visible}
        onOpenChange={setVisible}
        onFinish={onFinish}
      />
    </PageContainer>
  );
};

export default WfColumn;
