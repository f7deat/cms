import { ModalForm } from '@ant-design/pro-components';
import { Col, Input, Row } from 'antd';

const { Search } = Input;

type ExplorerProps = {
  visible: boolean;
  onVisibleChange: any;
};

const Explorer: React.FC<ExplorerProps> = (props) => {
  return (
    <ModalForm
      title="Select content"
      visible={props.visible}
      onVisibleChange={props.onVisibleChange}
    >
      <Search />
      <Row>
        <Col span={8}></Col>
        <Col span={16}></Col>
      </Row>
    </ModalForm>
  );
};

export default Explorer;
