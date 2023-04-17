import FilePreview from '@/pages/files/center/preview';
import Gallery from '@/pages/files/gallery';
import { deleteWork, getImage, saveImage } from '@/services/work-content';
import {
  ArrowLeftOutlined,
  BarsOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormDigit,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Col, message, Popconfirm, Row, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';

const Image: React.FC = () => {
  const { id } = useParams();
  const intl = useIntl();

  const [image, setImage] = useState<API.FileContent>();
  const [open, setOpen] = useState<boolean>(false);

  const formRef = useRef<ProFormInstance>();

  const onFinish = async (values: API.Image) => {
    values.file = image;
    const response = await saveImage(values);
    if (response.succeeded) {
      message.success('Saved!');
    } else {
      message.error(response.errors[0].description);
    }
  };

  useEffect(() => {
    getImage(id).then((response) => {
      setImage(response.file);
      formRef.current?.setFields([
        {
          name: 'height',
          value: response.height,
        },
        {
          name: 'width',
          value: response.width,
        },
        {
          name: 'alt',
          value: response.alt,
        },
        {
          name: 'description',
          value: response.description,
        },
        {
          name: 'className',
          value: response.className,
        },
        {
          name: 'wrapper',
          value: response.wrapper,
        },
      ]);
    });
  }, []);

  const onConfirm = async () => {
    const response = await deleteWork(id);
    if (response.succeeded) {
      message.success(
        intl.formatMessage({
          id: 'general.deleted',
        }),
      );
      history.back();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const extra = (
    <Space>
      <Popconfirm title="Are you sure?" onConfirm={onConfirm}>
        <Button type="primary" danger icon={<DeleteOutlined />}>
          Delete
        </Button>
      </Popconfirm>
      <Button icon={<ArrowLeftOutlined />} onClick={() => history.back()}>
        Back
      </Button>
      <Button icon={<BarsOutlined />} />
    </Space>
  );

  const onSelect = (values: API.FileContent) => {
    setImage(values);
    setOpen(false);
  };

  return (
    <PageContainer title="Image" extra={extra}>
      <Row gutter={16}>
        <Col span={6}>
          <FilePreview file={image} onChange={() => setOpen(true)} />
        </Col>
        <Col span={18}>
          <ProCard
            title={intl.formatMessage({
              id: 'menu.settings',
            })}
          >
            <ProForm onFinish={onFinish} formRef={formRef}>
              <ProFormText name="id" hidden={true} initialValue={id} />
              <ProFormText name="alt" label="Alt" />
              <ProFormTextArea name="description" label="Description" />
              <ProFormText name="className" label="Class Name" />
              <ProFormDigit label="Width" name="width" />
              <ProFormDigit label="Height" name="height" />
              <ProFormText label="Wrapper" name="wrapper" />
            </ProForm>
          </ProCard>
        </Col>
      </Row>
      <Gallery open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </PageContainer>
  );
};

export default Image;
