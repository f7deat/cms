import { queryFormSelect } from '@/services/component';
import { ProFormSelect } from '@ant-design/pro-components';

type ComponentFormSelectProps = {
  name?: string;
  label?: string;
};

const ComponentFormSelect: React.FC<ComponentFormSelectProps> = (props) => {
  return (
    <ProFormSelect
      showSearch
      request={queryFormSelect}
      name={props.name}
      label={props.label}
    />
  );
};

export default ComponentFormSelect;
