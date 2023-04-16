import CatalogList from '@/components/catalog/list';
import { CatalogType } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';

const VideoPage: React.FC = () => {
  return (
    <PageContainer>
      <CatalogList type={CatalogType.Video} />
    </PageContainer>
  );
};

export default VideoPage;
