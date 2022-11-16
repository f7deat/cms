import WorkContentComponent from '@/components/work-content';
import { addSwiperItem, getSwiper } from '@/services/work-content';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Button, Col, message, Row } from 'antd';
import { useEffect, useRef, useState } from 'react';

const Swiper: React.FC = () => {
  const { id } = useParams();

  const formRef = useRef<ProFormInstance>();

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    getSwiper(id).then((response) => {
      formRef.current?.setFields([
        {
          name: 'id',
          value: response.id,
        },
        {
          name: 'name',
          value: response.name,
        },
      ]);
    });
  }, []);

  const onFinish = async (values: any) => {
    values.id = id;
    const respponse = await addSwiperItem(values);
    if (respponse.succeeded) {
      message.success('Added');
      setVisible(false);
    }
  };

  return (
    <PageContainer
      title="Swiper"
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setVisible(true)}
        >
          Add image
        </Button>
      }
    >
      <Row gutter={16}>
        <Col span={16}>
          <WorkContentComponent child={true} />
        </Col>
        <Col span={8}>
          <ProCard title="Setting">
            <ProForm formRef={formRef}>
              <ProFormText name="name" label="Name" />
            </ProForm>
          </ProCard>
        </Col>
      </Row>
      <ModalForm
        visible={visible}
        onVisibleChange={setVisible}
        title="Add items"
        onFinish={onFinish}
      >
        <ProFormText name="name" label="Name" />
      </ModalForm>
    </PageContainer>
  );
};

export default Swiper;
