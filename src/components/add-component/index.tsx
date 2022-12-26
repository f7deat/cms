import { listComponent } from '@/services/component';
import {
  ModalForm,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { DefaultOptionType } from 'antd/lib/select';
import { useEffect, useState } from 'react';

type AddComponentProps = {
  open: boolean;
  onOpenChange: any;
  onFinish: any;
};

const AddComponent: React.FC<AddComponentProps> = (props) => {
  const [components, setComponents] = useState<DefaultOptionType[]>();

  useEffect(() => {
    listComponent().then((response) => {
      setComponents(
        response.map((c: any) => {
          return {
            label: c.name,
            value: c.id,
          };
        }),
      );
    });
  }, []);

  return (
    <ModalForm
      open={props.open}
      title="Add component"
      onFinish={props.onFinish}
      onOpenChange={props.onOpenChange}
    >
      <ProFormText name="name" label="Name" />
      <ProFormSelect
        showSearch
        options={components}
        name="componentId"
        label="Component"
      ></ProFormSelect>
    </ModalForm>
  );
};

export default AddComponent;
