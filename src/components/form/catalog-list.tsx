import { queryCatalogSelect } from '@/services/catalog';
import { ProFormSelect, ProFormSelectProps } from '@ant-design/pro-components';


const FormCatalogList: React.FC<ProFormSelectProps> = (props) => {
    return (
        <ProFormSelect
            showSearch
            request={queryCatalogSelect}
            label={props.label}
            name={props.name}
            initialValue={props.initialValue}
        />
    );
};

export default FormCatalogList;
