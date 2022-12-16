import { ProCard } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Divider, Descriptions, Image, Empty } from 'antd';

type FilePreviewProps = {
  file?: API.FileContent;
  onChange?: any;
};

const FilePreview: React.FC<FilePreviewProps> = (props) => {
  const supportImage = ['image/jpeg', 'image/png', 'image/webp'];

  const intl = useIntl();

  const { file } = props;

  const handleChane = () => {
    if (props.onChange) {
      props.onChange();
    }
  };

  const renderPreview = () => {
    if (supportImage.includes(file?.type ?? '')) {
      const url = new URL(file?.url || '', localStorage.getItem('wf_URL') || '')
        .href;
      return (
        <div
          className="flex justify-center items-center"
          style={{
            minHeight: 130,
          }}
        >
          <Image src={url} />
        </div>
      );
    }
    return (
      <div onClick={handleChane}>
        <Empty />
      </div>
    );
  };
  return (
    <ProCard
      title={intl.formatMessage({
        id: 'general.preview',
      })}
    >
      {renderPreview()}
      <Divider />
      <Descriptions title="File info" column={1}>
        <Descriptions.Item label="Name">{file?.name}</Descriptions.Item>
        <Descriptions.Item label="Size">
          {((file?.size ?? 0) / 1024).toFixed(2)} KB
        </Descriptions.Item>
        <Descriptions.Item label="Type">{file?.type}</Descriptions.Item>
      </Descriptions>
    </ProCard>
  );
};

export default FilePreview;
