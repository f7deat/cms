import WfUpload from "@/components/file-explorer/upload";
import { queryProductImage, saveProductImage } from "@/services/catalog";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components"
import { useParams } from "@umijs/max";
import { UploadFile, Button, message, Image } from "antd";
import { RcFile } from "antd/es/upload";
import { useEffect, useState } from "react";

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const ProductImage: React.FC = () => {

    const { id } = useParams();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<string[]>([]);

    useEffect(() => {
        queryProductImage(id).then(response => {
            setFileList(response.images);
        })
    }, []);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const onFinish = async (url: string) => {
        let newList = fileList;
        newList.push(url);
        const response = await saveProductImage(newList, id);
        if (response.succeeded) {
            setFileList(newList);
            message.success('Saved!');
        } else {
            message.error(response.errors[0].description);
        }
    }

    const onRemoveImage = async (url: string) => {
        const newList = fileList.filter(x => x !== url);
        const response = await saveProductImage(newList, id);
        if (response.succeeded) {
            setFileList(newList);
            message.success('Saved!');
        } else {
            message.error(response.errors[0].description);
        }
    }

    return (
        <ProCard>
            <div className="flex gap-4">
                {
                    fileList.map((url, index) => (
                        <div className="btn-upload p-2" key={index}>
                            <Image src={url} alt="IMG" />
                            <Button icon={<DeleteOutlined />} size="small" danger onClick={() => onRemoveImage(url)} style={{
                                position: 'absolute',
                                right: 6
                            }} />
                        </div>
                    ))
                }

                <button type="button" className="btn-upload" onClick={() => setPreviewOpen(true)}>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                </button>
            </div>
            <WfUpload open={previewOpen} onCancel={handleCancel} onFinish={onFinish} />
        </ProCard>
    )
}

export default ProductImage