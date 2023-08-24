import { ProCard, ProForm, ProFormText } from "@ant-design/pro-components"
import { Alert, Divider, Typography } from "antd"

const GraphApiExplorer: React.FC = () => {
    return (
        <ProCard title="Graph API Explorer" headerBordered>
            <Typography.Title level={5}>Results</Typography.Title>
            <Alert type="info" banner message="Unknow"></Alert>
            <Divider />
            <ProForm>
                <ProFormText label="Try to get" name="query" initialValue="me?fields=id,name" />
            </ProForm>
        </ProCard>
    )
}

export default GraphApiExplorer