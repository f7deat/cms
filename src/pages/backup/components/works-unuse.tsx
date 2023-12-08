import { apiUnuseWorks } from "@/services/work-content"
import { ProCard, ProColumns, ProTable } from "@ant-design/pro-components"

const WorksUnuse : React.FC = () => {

    const columns: ProColumns<any>[] = [
        {
            title: '#',
            valueType: 'indexBorder'
        }
    ]

    return (
        <ProCard title="Unuse Works">
            <ProTable request={apiUnuseWorks} columns={columns} ghost search={false} />
        </ProCard>
    )
}

export default WorksUnuse