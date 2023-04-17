import { listTagSelect } from '@/services/catalog';
import { ProFormSelect } from '@ant-design/pro-components';

type FormTagProps = {
  label?: string;
  name?: string;
};

const FormTag: React.FC<FormTagProps> = (props) => {
  return (
    <ProFormSelect
      showSearch
      request={listTagSelect}
      label={props.label}
      name={props.name}
    />
  );
};

export default FormTag;
