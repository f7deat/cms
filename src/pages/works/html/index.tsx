import { getWorkItem } from '@/services/work-item';
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { useEffect, useRef } from 'react';

const HtmlComponent: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  function htmlDecode(input: string) {
    const e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }

  useEffect(() => {
    getWorkItem(id).then((response) => {
      formRef.current?.setFieldValue(
        'arguments',
        htmlDecode(response.arguments),
      );
    });
  }, [id]);

  return (
    <PageContainer title="Html">
      {id}
      <ProForm formRef={formRef}>
        <ProFormTextArea name="arguments" label="Html"></ProFormTextArea>
      </ProForm>
    </PageContainer>
  );
};

export default HtmlComponent;
