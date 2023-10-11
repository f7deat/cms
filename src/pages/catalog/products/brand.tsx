import FormBrandSelect from "@/components/form/brand-form-select"
import { getCatalog, saveBrand } from "@/services/catalog"
import { ProForm, ProFormInstance } from "@ant-design/pro-components"
import { useParams } from "@umijs/max"
import { Card, message } from "antd"
import { useEffect, useRef } from "react"

const ProductBrand : React.FC = () => {

    const { id } = useParams();
    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        getCatalog(id).then((response) => {
            formRef.current?.setFieldValue('brandId', response.parentId);
        })
    }, [])

    const onFinish = async (values: any) => {
        values.productId = id;
        const response = await saveBrand(values);
        if (response.succeeded) {
            message.success('Saved!');
        }
    }

    return (
        <Card className="mb-4" title="Brand">
            <ProForm layout="inline" onFinish={onFinish} formRef={formRef}>
                <FormBrandSelect name="brandId" label="Brand" rules={[
                    {
                        required: true
                    }
                ]} />
            </ProForm>
        </Card>
    )
}

export default ProductBrand