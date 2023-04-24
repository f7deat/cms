import { ModalForm, ProFormText } from "@ant-design/pro-components"
import { useState } from "react"

const YoutubeEmbed: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const [src, setSrc] = useState<string>();
    return (
        <div>
            <ModalForm open={open} onOpenChange={setOpen} onFinish={async (values: any) => {
                setSrc(values.src);
                setOpen(false)
            }}>
                <ProFormText label="Url" name="src" />
            </ModalForm>
            <iframe hidden={open} width="100%" height="400" src={'https://www.youtube.com/embed/' + src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default YoutubeEmbed