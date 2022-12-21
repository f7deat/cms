import { useModel } from '@umijs/max';
import { SelectLang } from '@umijs/max';
import { Space } from 'antd';
import AvatarDropdown from './avatar-dropdown';

const RightContent: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.currentUser) {
    return null;
  }

  return (
    <Space>
      <AvatarDropdown menu />
      <SelectLang />
    </Space>
  );
};

export default RightContent;
