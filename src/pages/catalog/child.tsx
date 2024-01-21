import FormCatalogType from "@/components/form/catalog-type";
import { CatalogType } from "@/constants";
import { addCatalog, deleteCatalog, listCatalog } from "@/services/catalog";
import { DeleteOutlined, EditOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { ActionType, ModalForm, ProFormText, ProFormTextArea, ProList } from "@ant-design/pro-components";
import { FormattedMessage, useParams, history, useIntl } from "@umijs/max";
import { Button, Popconfirm, message } from "antd";
import { useRef, useState } from "react";

type ChildCatalogProps = {
    parent?: API.Catalog;
}

const ChildCatalog: React.FC<ChildCatalogProps> = ({ parent }) => {

    const { id } = useParams();
    const intl = useIntl();

    const [open, setOpen] = useState<boolean>(false);
    const actionRef = useRef<ActionType>();

    const onFinish = async (values: API.Catalog) => {
        values.parentId = id;
        values.type = Number(values.type);
        const response = await addCatalog(values);
        if (response.succeeded) {
            message.success('Added!');
            actionRef.current?.reload();
            setOpen(false);
        }
    };

    const onConfirm = async (id?: string) => {
        const response = await deleteCatalog(id);
        if (response.succeeded) {
            message.success('Deleted');
            actionRef.current?.reload();
        } else {
            message.error(response.errors[0].description);
        }
    };

    const onEdit = (id?: string) => {
        history.push(`/catalog/${id}`);
        actionRef.current?.reload();
    }

    return (
        <>
            <ProList<API.Catalog>
                ghost
                headerTitle="Trang con"
                actionRef={actionRef}
                toolBarRender={() => {
                    return [
                        <Button key="3" type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>
                            <span><FormattedMessage id="general.new" /></span>
                        </Button>
                    ];
                }}
                metas={{
                    title: {
                        dataIndex: 'name'
                    },
                    description: {
                        dataIndex: 'description'
                    },
                    actions: {
                        render: (dom, entity) => [
                            <Button icon={<MoreOutlined />} type="dashed"></Button>,
                            <Button
                                icon={<EditOutlined />}
                                key={1}
                                type="primary"
                                onClick={() => onEdit(entity.id)}
                            ></Button>,
                            <Popconfirm
                                title="Are you sure?"
                                key={2}
                                onConfirm={() => onConfirm(entity.id)}
                            >
                                <Button icon={<DeleteOutlined />} type="primary" danger />
                            </Popconfirm>,
                        ]
                    }
                }}
                request={(params) =>
                    listCatalog({
                        ...params,
                        parentId: id,
                        locale: intl.locale,
                        type: parent?.type
                    }, {})
                }
                pagination={{

                }}
            />

            <ModalForm
                open={open}
                onOpenChange={setOpen}
                onFinish={onFinish}
                title={<FormattedMessage id="general.new" />}
            >
                <ProFormText
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                />
                <FormCatalogType label='Type' name='type' initialValue={`${CatalogType.Default}`} />
                <ProFormTextArea label="Description" name="description" />
            </ModalForm>
        </>
    )
}

export default ChildCatalog