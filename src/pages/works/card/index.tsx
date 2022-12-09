import Explorer from '@/pages/files/explorer';
import { getCard, saveCard } from '@/services/work-content';
import {
  PageContainer,
  ProForm,
  ProFormField,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useIntl, useParams } from '@umijs/max';
import { Button, message } from 'antd';
import { useEffect, useRef, useState } from 'react';

const WfCard: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    getCard(id).then((response) => {
      if (response) {
        formRef.current?.setFields([
          {
            name: 'title',
            value: response.title,
          },
          {
            name: 'text',
            value: response.text,
          },
        ]);
      }
    });
  }, [id]);

  const onFinish = async (values: any) => {
    values.id = id;
    const response = await saveCard(values);
    if (response.succeeded) {
      message.success('Saved!');
    }
  };

  return (
    <PageContainer
      title={intl.formatMessage({
        id: 'menu.component.card',
      })}
    >
      <ProForm onFinish={onFinish} formRef={formRef}>
        <ProFormField label="Image">
          <Button type="dashed" onClick={() => setVisible(true)}>
            Choose Image
          </Button>
        </ProFormField>
        <ProFormText name="title" label="Title" />
        <ProFormTextArea name="text" label="Text" />
      </ProForm>
      <Explorer visible={visible} onVisibleChange={setVisible} />
    </PageContainer>
  );
};

export default WfCard;
