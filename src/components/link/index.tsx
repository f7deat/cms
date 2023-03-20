import {
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';

type LinkProps = {
  open: boolean;
  onOpenChange?: any;
  onFinish?: any;
};

const WfLink: React.FC<LinkProps> = (props) => {
  const onFinish = async (values: API.Link) => {
    props.onFinish(values);
    props.onOpenChange(false);
  };

  return (
    <ModalForm
      onFinish={onFinish}
      open={props.open}
      onOpenChange={props.onOpenChange}
    >
      <ProFormText name="name" label="Name" />
      <ProFormText
        name="url"
        label="URL"
        rules={[
          {
            required: true,
          },
        ]}
      />
      <ProFormSelect
        name="target"
        label="Target"
        allowClear
        options={[
          {
            value: '_blank',
            label: 'Open in new tab',
          },
        ]}
      />
    </ModalForm>
  );
};

export default WfLink;
