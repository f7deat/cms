import { RequestConfig } from '@umijs/max';
import '../style.css';
import logo from './assets/logo.svg';
import { queryCurrentUser } from './services/user';
import { history } from '@umijs/max';
import { RunTimeLayoutConfig } from '@umijs/max';
import RightContent from './components/right-content';
import { DefaultFooter } from '@ant-design/pro-components';
import { RequestOptions } from './.umi/plugin-request/request';
import { GithubOutlined } from '@ant-design/icons';

const loginPath = '/accounts/login';

export async function getInitialState(): Promise<{
  avatar?: string;
  name?: string;
  currentUser?: API.User;
  fetchUserInfo?: () => Promise<API.User | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      return msg.data as API.User;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      name: currentUser?.userName,
      avatar: currentUser?.avatar,
      currentUser: currentUser,
    };
  }
  return {
    fetchUserInfo,
    name: '@umijs/max',
  };
}
export const layout: RunTimeLayoutConfig = ({ initialState }) => {

  const copyright = () => {
    return localStorage.getItem('wf_URL')?.substring(8).replace('/', '');
  }

  return {
    logo: logo,
    menu: {
      locale: true,
    },
    waterMarkProps: {
      content: initialState?.currentUser?.userName
    },
    layout: 'top',
    footerRender: () => (
      <DefaultFooter copyright={copyright()} links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/f7deat/waffle',
          blankTarget: true,
        },
        {
          key: 'Waffle',
          title: 'Waffle',
          href: 'https://github.com/f7deat/waffle',
          blankTarget: true,
        },
      ]} />
    ),
    rightContentRender: () => <RightContent />,
    onPageChange: () => {
      const { location } = history;
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
  };
};

export const request: RequestConfig = {
  requestInterceptors: [
    (config: RequestOptions) => {
      const token = localStorage.getItem('wf_token');
      const baseURL = localStorage.getItem('wf_URL');
      config.baseURL = new URL(`api/`, baseURL || '').href;
      config.headers = {
        authorization: `Bearer ${token}`,
      };
      return config;
    },
  ],
  responseInterceptors: [
    (res: any) => {
      return res;
    },
  ],
  errorConfig: {},
};
