import { ModalForm, ProFormText } from '@ant-design/pro-components';
import ComponentFormSelect from '../works/component';

type AddComponentProps = {
  open: boolean;
  onOpenChange: any;
  onFinish: any;
};

const AddComponent: React.FC<AddComponentProps> = (props) => {
  return (
    <ModalForm
      open={props.open}
      title="Component"
      onFinish={props.onFinish}
      onOpenChange={props.onOpenChange}
    >
      <ProFormText name="name" label="Name" />
      <ComponentFormSelect name="componentId" label="Component" />
    </ModalForm>
  );
};

export default AddComponent;
