import { listRole } from "@/services/role";
import { PlusOutlined } from "@ant-design/icons";
import { ModalForm, ProFormSelect } from "@ant-design/pro-components";
import { useModel } from "@umijs/max";
import { Button, Tag, Typography } from "antd";
import { useState } from "react";

type ProfileRolesProps = {
    roles: string[];
}

const ProfileRoles: React.FC<ProfileRolesProps> = (props) => {
    const { initialState } = useModel('@@initialState');
    const { currentUser } = initialState || {};
    const { roles } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Typography.Title level={5}>Roles</Typography.Title>
            {roles.map((role) => (
                <Tag key={role} color="blue">
                    {role}
                </Tag>
            ))}
            {
                currentUser?.roles.includes('admin') && (
                    <Button type='dashed' size='small' icon={<PlusOutlined />} onClick={() => setOpen(true)}>Add to role</Button>
                )
            }
            <ModalForm title="Add to role" open={open} onOpenChange={setOpen}>
                <ProFormSelect name="role" label="Role" request={async (params) => {
                    const response = await listRole(params);
                    return response.data.map((role: API.Role) => {
                        return {
                            value: role.id,
                            label: role.name
                        }
                    })
                }} />
            </ModalForm>
        </>
    )
}

export default ProfileRoles