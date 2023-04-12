import WorkSummary from '@/components/works/summary';
import { getArguments, saveArguments } from '@/services/work-content';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, Row, message } from 'antd';
import { useEffect, useRef } from 'react';

const WordPressPostComponent: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getArguments(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'id',
          value: response.id,
        },
        {
          name: 'domain',
          value: response.domain,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: any) => {
    const response = await saveArguments(id, values);
    if (response.succeeded) {
      message.success('Saved');
    }
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col md={16}>
          <ProCard>
            <ProForm onFinish={onFinish} formRef={formRef}>
              <ProFormText name="id" label="Post ID" />
              <ProFormText name="domain" label="Domain" />
            </ProForm>
          </ProCard>
        </Col>
        <Col md={8}>
          <WorkSummary />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default WordPressPostComponent;
