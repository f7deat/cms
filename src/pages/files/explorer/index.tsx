import { listFile } from '@/services/file-service';
import { ModalForm, ProList } from '@ant-design/pro-components';
import { Col, Input, Row } from 'antd';

const { Search } = Input;

type ExplorerProps = {
  visible: boolean;
  onVisibleChange?: any;
  onFinish?: any;
};

const Explorer: React.FC<ExplorerProps> = (props) => {
  return (
    <ModalForm
      title="Select content"
      visible={props.visible}
      onVisibleChange={props.onVisibleChange}
      onFinish={props.onFinish}
    >
      <Row>
        <Search />
        <Col span={6}></Col>
        <Col span={18}>
          <ProList<API.FileContent>
            request={listFile}
            metas={{
              title: {
                dataIndex: 'name',
              },
            }}
          />
        </Col>
      </Row>
    </ModalForm>
  );
};

export default Explorer;
