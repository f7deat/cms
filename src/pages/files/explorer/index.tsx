import { listFile, uploadFromUrl, uploadRcFile } from '@/services/file-service';
import {
  BarsOutlined,
  DeleteOutlined,
  EyeOutlined,
  HomeOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { ActionType, ModalForm, ProList } from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl } from '@umijs/max';
import {
  Breadcrumb,
  Button,
  Dropdown,
  Input,
  message,
  Popconfirm,
  Space,
  Upload,
  UploadProps,
} from 'antd';
import { useRef, useState } from 'react';

type ExplorerProps = {
  open: boolean;
  onOpenChange?: any;
  onFinish?: any;
  onSelect?: any;
  type?: string[];
};

const Explorer: React.FC<ExplorerProps> = (props) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();
  const [url, setUrl] = useState<string>();

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

  const quickUpload = async () => {
    if (!url) {
      return;
    }
    const response = await uploadFromUrl(url);
    if (response.succeeded) {
      message.success('Uploaded!');
      actionRef.current?.reload();
    }
  };

  return (
    <ModalForm
      open={props.open}
      onOpenChange={props.onOpenChange}
      onFinish={props.onFinish}
      submitter={false}
    >
      <div className="mb-4">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Input.Group compact className="mb-4">
        <Input
          style={{ width: 'calc(100% - 200px)' }}
          onChange={(e) => setUrl(e.currentTarget.value)}
        />
        <Button type="primary" onClick={quickUpload}>
          Quick add
        </Button>
      </Input.Group>
      <ProList<API.FileContent>
        toolBarRender={() => {
          return [
            <Upload {...uploadProps} key={0}>
              <Button icon={<UploadOutlined />} type="primary">
                Upload
              </Button>
            </Upload>,
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
            props.type,
          )
        }
        rowSelection={{}}
        search={{
          layout: 'vertical',
        }}
        pagination={{
          pageSize: 5,
        }}
        metas={{
          title: {
            dataIndex: 'name',
            title: 'Name',
            render: (dom, entity) => (
              <a
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
              </a>
            ),
          },
          description: {
            search: false,
            render: (_, row) => (
              <Space>
                <span>{row.type}</span>
                <span>|</span>
                <span>{(row.size / 1024).toFixed(2)} KB</span>
              </Space>
            ),
          },
          actions: {
            render: (_, row) => (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 1,
                      label: (
                        <Space
                          onClick={() =>
                            history.push(`/files/center/${row.id}`)
                          }
                        >
                          <EyeOutlined />
                          <FormattedMessage id="general.preview" />
                        </Space>
                      ),
                    },
                    {
                      key: 2,
                      label: (
                        <Popconfirm title="Are you sure?">
                          <Space>
                            <DeleteOutlined />
                            Delete
                          </Space>
                        </Popconfirm>
                      ),
                      danger: true,
                    },
                  ],
                }}
              >
                <Button icon={<BarsOutlined />} type="link" size="small" />
              </Dropdown>
            ),
          },
        }}
        actionRef={actionRef}
      />
    </ModalForm>
  );
};

export default Explorer;
