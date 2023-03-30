import Gallery from '@/pages/files/gallery';
import { EditOutlined } from '@ant-design/icons';
import { ProForm } from '@ant-design/pro-components';
import { Button, Image } from 'antd';
import { useEffect, useState } from 'react';

type ProFormImageProps = {
  name?: string;
  label?: string;
};

const ProFormImage: React.FC<ProFormImageProps> = (props) => {
  const formRef = ProForm.useFormInstance();
  const [open, setOpen] = useState<boolean>(false);
  const [src, setSrc] = useState<string>();

  const onFinish = (values: API.FileContent) => {
    formRef?.setFieldValue('backgroundImage', values.url);
    setSrc(values.url);
    setOpen(false);
  };

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        setSrc(formRef?.getFieldValue(props.name || ''));
        resolve(true);
      }, 500);
    });
  }, []);

  return (
    <ProForm.Item name={props.name} label={props.label}>
      <Image src={src} height={150} width={150} />
      <Button icon={<EditOutlined />} onClick={() => setOpen(true)}></Button>
      <Gallery open={open} onOpenChange={setOpen} onSelect={onFinish} />
    </ProForm.Item>
  );
};

export default ProFormImage;
