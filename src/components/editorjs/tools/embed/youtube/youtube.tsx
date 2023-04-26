import { ModalForm, ProFormText } from "@ant-design/pro-components"
import { useState } from "react"

type YoutubeEmbedProps = {
    src?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = (props) => {
    const [open, setOpen] = useState<boolean>(props.src ? false : true);
    const [src, setSrc] = useState<string>(props.src ? props.src :'https://www.youtube.com/embed/');
    return (
        <div>
            <ModalForm open={open} onOpenChange={setOpen} onFinish={async (values: any) => {
                setSrc('https://www.youtube.com/embed/' + values.embedId);
                setOpen(false)
            }}>
                <ProFormText label="Embed Id" name="embedId" />
            </ModalForm>
            <iframe hidden={open} width="100%" height="400" src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default YoutubeEmbed