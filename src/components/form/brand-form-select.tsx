import { CatalogType } from '@/constants';
import { queryCatalogSelect } from '@/services/catalog';
import { ProFormSelect, ProFormSelectProps } from '@ant-design/pro-components';

const FormBrandSelect: React.FC<ProFormSelectProps> = (props) => {
    return (
        <ProFormSelect
            showSearch
            request={(params) => {
                params.type = CatalogType.Brand;
                return queryCatalogSelect(params)
            }}
            {...props}
        />
    );
};

export default FormBrandSelect;
