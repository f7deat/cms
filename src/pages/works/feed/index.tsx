import WorkSummary from '@/components/works/summary';
import { getArguments, saveArguments } from '@/services/work-content';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormDigit,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, Row, message } from 'antd';
import { useEffect, useRef } from 'react';

const Feed: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    getArguments(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'name',
          value: response.name,
        },
        {
          name: 'type',
          value: response.type ?? 0,
        },
        {
          name: 'pageSize',
          value: response.pageSize,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: any) => {
    values.type = Number(values.type);
    const response = await saveArguments(id, values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <ProCard>
            <ProForm formRef={formRef} onFinish={onFinish}>
              <ProFormText name="name" label="Name" rules={[
                {
                  required: true
                }
              ]} />
              <ProFormSelect name="type" label="Type" rules={[
                {
                  required: true
                }
              ]} options={[
                {
                  value: 0,
                  label: 'Default'
                },
                {
                  value: 1,
                  label: 'Artice'
                },
                {
                  value: 2,
                  label: 'Shop'
                }
              ]} />
              <ProFormDigit name="pageSize" label="Page size" />
            </ProForm>
          </ProCard>
        </Col>
        <Col span={8}>
          <WorkSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Feed;
