import FilePreview from '@/pages/files/center/preview';
import Explorer from '@/pages/files/explorer';
import {
  deleteWorkContentById,
  getImage,
  saveImage,
} from '@/services/work-content';
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
    values.fileContent = image;
    const response = await saveImage(values);
    if (response.succeeded) {
      message.success('Saved!');
    } else {
      message.error(response.errors[0].description);
    }
  };

  useEffect(() => {
    getImage(id).then((response) => {
      setImage(response.fileContent);
      formRef.current?.setFields([
        {
          name: 'id',
          value: id,
        },
        {
          name: 'height',
          value: response.height,
        },
        {
          name: 'width',
          value: response.width,
        },
        {
          name: 'title',
          value: response.title,
        },
        {
          name: 'description',
          value: response.description,
        },
        {
          name: 'className',
          value: response.className,
        },
      ]);
    });
  }, []);

  const onConfirm = async () => {
    const response = await deleteWorkContentById(id);
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
              <ProFormText name="id" hidden={true} />
              <ProFormText name="title" label="Title" />
              <ProFormTextArea name="description" label="Description" />
              <ProFormText name="className" label="Class Name" />
              <ProFormDigit label="Width" name="width" />
              <ProFormDigit label="Height" name="height" />
            </ProForm>
          </ProCard>
        </Col>
      </Row>
      <Explorer open={open} onOpenChange={setOpen} onSelect={onSelect} />
    </PageContainer>
  );
};

export default Image;
