import { getUserInRoles } from "@/services/user";
import { UserOutlined } from "@ant-design/icons";
import { PageContainer, ProColumns, ProTable } from "@ant-design/pro-components"
import { useParams } from "@umijs/max"
import { Button } from "antd";

const RoleCenter: React.FC = () => {

    const { id } = useParams();

    const columns: ProColumns<API.User>[] = [
        {
          title: '#',
          valueType: 'indexBorder',
        },
        {
            title: 'Username',
            dataIndex: 'userName'
        },
        {
            title: '',
            valueType: 'option',
            render: (dom, entity) => [
                <Button type="primary" icon={<UserOutlined />} />
            ]
        }
    ]

    return (
        <PageContainer>
            <ProTable request={() => getUserInRoles(id)} columns={columns} />
        </PageContainer>
    )
}

export default RoleCenter