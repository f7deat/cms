import { CatalogType } from "@/constants";
import { apiTopView } from "@/services/catalog";
import { ProCard } from "@ant-design/pro-components"
import { List } from "antd";
import { useEffect, useState } from "react"

const TopView: React.FC = () => {

    const [dataSource, setDataSource] = useState<API.Catalog[]>([]);
    useEffect(() => {
        apiTopView(CatalogType.Article).then(response => {
            setDataSource(response);
        })
    }, []);

    return (
        <>
            <ProCard title="Top view">
                <List
                    dataSource={dataSource}
                />
            </ProCard>
        </>
    )
}

export default TopView