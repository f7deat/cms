import { listFile, uploadFromUrl, uploadRcFile } from '@/services/file-service';
import { UploadOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProForm,
  ProFormText,
  ProList,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Upload, Button, Image, message, UploadProps, Popover } from 'antd';
import { useRef } from 'react';

type GalleryProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect?: any;
};

const Gallery: React.FC<GalleryProps> = (props) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();

  const uploadProps: UploadProps = {
    name: 'file',
    action: uploadRcFile,
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        actionRef.current?.reload();
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const quickUpload = async (values: any) => {
    const response = await uploadFromUrl(values.url);
    if (response.succeeded) {
      message.success('Uploaded!');
      actionRef.current?.reload();
    }
  };

  const content = (
    <ProForm onFinish={quickUpload}>
      <ProFormText
        name="url"
        rules={[
          {
            required: true,
          },
        ]}
        placeholder="URL"
      />
    </ProForm>
  );

  return (
    <ModalForm open={props.open} onOpenChange={props.onOpenChange}>
      <ProList<API.FileContent>
        ghost={true}
        toolBarRender={() => {
          return [
            <Upload {...uploadProps} key={0}>
              <Button icon={<UploadOutlined />} type="primary">
                Upload
              </Button>
            </Upload>,
            <Popover
              key={2}
              trigger="click"
              content={content}
              title="Upload Via URL"
            >
              <Button icon={<UploadOutlined />} onClick={quickUpload}>
                Via URL
              </Button>
            </Popover>,
          ];
        }}
        headerTitle={intl.formatMessage({
          id: 'menu.fileManager',
        })}
        request={(params) =>
          listFile(
            {
              ...params,
            },
            ['.png', '.jpg'],
          )
        }
        search={{
          layout: 'vertical',
        }}
        pagination={{
          pageSize: 6,
        }}
        grid={{ column: 3 }}
        onItem={(record: any) => {
          return {
            onClick: () => {
              props.onSelect(record);
            },
          };
        }}
        metas={{
          content: {
            dataIndex: 'name',
            title: 'Name',
            render: (dom, record) => (
              <Image src={record.url} height={100} preview={false} />
            ),
          },
        }}
        actionRef={actionRef}
      />
    </ModalForm>
  );
};

export default Gallery;
