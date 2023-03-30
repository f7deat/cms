import ProFormImage from '@/components/image/form';
import WorkSummary from '@/components/works/summary';
import { getJumbotron, saveJumbotron } from '@/services/work-content';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormInstance,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, message, Row } from 'antd';
import { useEffect, useRef } from 'react';

const Jumbotron: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getJumbotron(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'backgroundImage',
          value: response.backgroundImage,
        },
      ]);
    });
  }, [id]);

  const onFinish = async (values: CPN.Jumbotron) => {
    const response = await saveJumbotron(id, values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={16}>
          <ProCard>
            <ProForm onFinish={onFinish} formRef={formRef}>
              <ProFormImage name="backgroundImage" label="Background image" />
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

export default Jumbotron;
