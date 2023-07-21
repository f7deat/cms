import { getByName } from "@/services/setting";
import { InfoCircleOutlined } from "@ant-design/icons";
import { ProCard, ProForm, ProFormInstance, ProFormText } from "@ant-design/pro-components"
import { useEffect, useRef } from "react"

const GoogleTagManager: React.FC = () => {

    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        getByName('GoogleTagManager').then(response => {
            console.log(response);
        })
    }, []);

    const onFinish = async (values: any) => {

    }

    return (
        <ProCard title="Google Tag Manager" extra={<a href="https://tagmanager.google.com/"><InfoCircleOutlined /></a>}>
            <ProForm formRef={formRef} onFinish={onFinish}>
                <ProFormText label="Tag Id" name="tagId" rules={[
                    {
                        required: true
                    }
                ]} />
            </ProForm>
        </ProCard>
    )
}

export default GoogleTagManager