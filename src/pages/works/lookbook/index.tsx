import ChildWorkContent from '@/components/child-work-content';
import { addLookBook } from '@/services/work-content';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl, useParams } from '@umijs/max';
import { Button, message } from 'antd';
import { useRef, useState } from 'react';

const LookBook: React.FC = () => {
  const { id } = useParams();
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const [open, setOpen] = useState<boolean>(false);

  const extra = (
    <Button
      icon={<PlusOutlined />}
      type="primary"
      onClick={() => setOpen(true)}
    >
      <FormattedMessage id="general.new" />
    </Button>
  );

  const onFinish = async (values: API.WorkContent) => {
    const response = await addLookBook(values);
    if (response.succeeded) {
      message.success(
        intl.formatMessage({
          id: 'general.added',
        }),
      );
      setOpen(false);
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
    }
  };

  return (
    <PageContainer extra={extra}>
      <ChildWorkContent actionRef={actionRef} />
      <ModalForm
        title={intl.formatMessage({
          id: 'general.new',
        })}
        onFinish={onFinish}
        open={open}
        onOpenChange={setOpen}
      >
        <ProFormText name="id" hidden initialValue={id} />
        <ProFormText name="name" label="Name" />
      </ModalForm>
    </PageContainer>
  );
};

export default LookBook;
