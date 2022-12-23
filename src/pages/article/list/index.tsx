import { PlusOutlined } from '@ant-design/icons';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, history } from '@umijs/max';
import { Button } from 'antd';

const ArticleList: React.FC = () => {
  return (
    <PageContainer
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => history.push(`/article/center/${undefined}`)}
        >
          <FormattedMessage id="general.new" />
        </Button>
      }
    >
      <ProTable />
    </PageContainer>
  );
};

export default ArticleList;
