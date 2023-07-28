import { getArguments, saveArguments } from "@/services/work-content";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ActionType, PageContainer, ProCard, ProForm, ProFormInstance, ProFormText, ProList } from "@ant-design/pro-components"
import { useParams } from "@umijs/max";
import { Button, Col, Row, message } from "antd";
import { useEffect, useRef, useState } from "react"

const Sponsor: React.FC = () => {

    const { id } = useParams();
    const [brands, setBrands] = useState<API.Brand[]>([]);

    const formRef = useRef<ProFormInstance>();
    const actionRef = useRef<ActionType>();

    useEffect(() => {
        getArguments(id).then(response => {
            setBrands(response.brands);
        })
    }, []);

    const setFields = (brand: API.Brand) => {
        formRef.current?.setFields([
            {
                name: 'id',
                value: brand.id
            },
            {
                name: 'name',
                value: brand.name
            },
            {
                name: 'logo',
                value: brand.logo
            },
            {
                name: 'url',
                value: brand.url
            }
        ])
    }

    const onFinish = async (values: API.Brand) => {
        if (values.id) {
            const objIndex = brands.findIndex((obj => obj.id === values.id));
            brands[objIndex].name = values.name;
            brands[objIndex].url = values.url;
            brands[objIndex].logo = values.logo;
        } else {
            setBrands([...brands, values]);
        }

        const body = {
            brands: brands
        }
        console.log(body)

        const response = await saveArguments(id, body);
        if (response.succeeded) {
            message.success('Saved!');
            actionRef.current?.reload();
        }
    }

    const remove = (brand: API.Brand) => {
        setBrands(brands.filter(x => x.id !== brand.id));
        message.success('Deleted!');
    }

    return (
        <PageContainer>
            <Row gutter={16}>
                <Col span={16}>
                    <ProList
                        actionRef={actionRef}
                        dataSource={brands}
                        metas={{
                            avatar: {
                                dataIndex: 'logo'
                            },
                            title: {
                                dataIndex: 'name'
                            },
                            description: {
                                dataIndex: 'url'
                            },
                            actions: {
                                render: (dom, entity) => [
                                    <Button key="edit" icon={<EditOutlined />} type="primary" onClick={() => setFields(entity)} />,
                                    <Button key="delete" icon={<DeleteOutlined />} type="primary" danger onClick={() => remove(entity)} />
                                ]
                            }
                        }}
                    />
                </Col>
                <Col span={8}>
                    <ProCard>
                        <ProForm formRef={formRef} onFinish={onFinish}>
                            <ProFormText name="id" label="Id" disabled />
                            <ProFormText name="name" label="Name" />
                            <ProFormText name="logo" label="Logo" />
                            <ProFormText name="url" label="Url" />
                        </ProForm>
                    </ProCard>
                </Col>
            </Row>


        </PageContainer>
    )
}

export default Sponsor