import { listFile, uploadRcFile } from '@/services/file-service';
import { BarsOutlined, HomeOutlined, UploadOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  ProCard,
  ProList,
} from '@ant-design/pro-components';
import { Breadcrumb, Button, Input, message, Upload, UploadProps } from 'antd';
import { useRef } from 'react';

const { Search } = Input;

type ExplorerProps = {
  visible: boolean;
  onVisibleChange?: any;
  onFinish?: any;
  onSelect?: any;
};

const Explorer: React.FC<ExplorerProps> = (props) => {
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
  return (
    <ModalForm
      title="Select content"
      open={props.visible}
      onOpenChange={props.onVisibleChange}
      onFinish={props.onFinish}
    >
      <div className="mb-4">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <ProCard
        title="List"
        extra={
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />} type="primary">
              Upload
            </Button>
          </Upload>
        }
      >
        <Search />
        <ProList<API.FileContent>
          request={listFile}
          metas={{
            title: {
              dataIndex: 'name',
              render: (dom, entity) => (
                <Button
                  type="link"
                  size="small"
                  onClick={() => {
                    if (props.onSelect) {
                      entity.url = new URL(
                        entity.url,
                        localStorage.getItem('wf_URL') || '',
                      ).href;
                      props.onSelect(entity);
                    }
                  }}
                >
                  {dom}
                </Button>
              ),
            },
            actions: {
              render: () => (
                <Button icon={<BarsOutlined />} type="link" size="small" />
              ),
            },
          }}
          actionRef={actionRef}
        />
      </ProCard>
    </ModalForm>
  );
};

export default Explorer;
