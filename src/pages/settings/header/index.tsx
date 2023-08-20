import FileExplorer from '@/components/file-explorer';
import {
  getHeader,
  getHeaderTemplates,
  saveHeader,
  saveHeaderLogo,
} from '@/services/setting';
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormInstance,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { Col, message, Row, Image, Button } from 'antd';
import { useEffect, useRef, useState } from 'react';

const Header: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();
  const [options, setOptions] = useState();
  const [logo, setLogo] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    getHeaderTemplates().then((response) => {
      setOptions(response);
      getHeader(id).then((header) => {
        formRef.current?.setFields([
          {
            name: 'template',
            value: header.template,
          },
          {
            name: 'logo',
            value: header.logo,
          },
        ]);
        setLogo(header.logo);
      });
    });
  }, []);

  const onFinish = async (values: any) => {
    const response = await saveHeader(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  const onLogo = async (values: API.FileContent) => {
    const data = {
      id: id,
      logo: values.url,
    };
    const response = await saveHeaderLogo(data);
    if (response.succeeded) {
      message.success('Saved!');
      setOpen(false);
      setLogo(values.url);
      formRef.current?.setFieldValue('logo', values.url);
    }
  };

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col span={18}>
          <ProCard>
            <ProForm onFinish={onFinish} formRef={formRef}>
              <ProFormText name="id" initialValue={id} hidden />
              <ProFormText name="logo" hidden />
              <ProFormSelect options={options} name="template" />
            </ProForm>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            extra={<Button onClick={() => setOpen(true)}>Choose</Button>}
          >
            <Image src={logo} width={250} />
          </ProCard>
        </Col>
      </Row>
      <FileExplorer open={open} onOpenChange={setOpen} onSelect={onLogo} />
    </PageContainer>
  );
};

export default Header;
