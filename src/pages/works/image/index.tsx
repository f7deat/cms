import { getImage, saveImage } from '@/services/work-content';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useParams } from '@umijs/max';
import { Col, message, Row, Upload, UploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/lib/upload';
import { useEffect, useRef, useState } from 'react';

const Image: React.FC = () => {
  const { id } = useParams();
  const { initialState: domain } = useModel('@@initialState');

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const formRef = useRef<ProFormInstance>();

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(domain?.domain + url);
      });
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/svg+xml';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const onFinish = async (values: API.Image) => {
    const response = await saveImage(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  useEffect(() => {
    getImage(id).then((response) => {
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
          name: 'alt',
          value: response.alt,
        },
        {
          name: 'url',
          value: response.url,
        },
        {
          name: 'className',
          value: response.className,
        },
      ]);
      if (response.src) {
        setImageUrl(response.src);
      }
    });
  }, []);

  return (
    <PageContainer title="Image">
      <Row gutter={16}>
        <Col>
          <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={`${domain?.domain}/api/image/upload/${id}`}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={domain?.domain + imageUrl}
                alt="avatar"
                style={{ width: '100%' }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Col>
        <Col>
          <ProForm onFinish={onFinish} formRef={formRef}>
            <ProFormText name="id" hidden={true} />
            <ProFormText name="alt" label="Alt" />
            <ProFormText name="url" label="Url" />
            <ProFormText name="className" label="Class Name" />
            <ProFormDigit label="Width" name="width" />
            <ProFormDigit label="Height" name="height" />
          </ProForm>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Image;
