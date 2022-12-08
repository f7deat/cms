import { ModalForm } from '@ant-design/pro-components';
import { Col, Input, Row } from 'antd';

const { Search } = Input;

type ExplorerProps = {
  visible: boolean;
};

const Explorer: React.FC<ExplorerProps> = () => {
  return (
    <ModalForm title="Select content">
      <Search />
      <Row>
        <Col span={8}></Col>
        <Col span={16}></Col>
      </Row>
    </ModalForm>
  );
};

export default Explorer;
