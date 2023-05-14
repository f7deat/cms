import { RequestConfig } from '@umijs/max';
import '../style.css';
import logo from './assets/logo.svg';
import { queryCurrentUser } from './services/user';
import { history } from '@umijs/max';
import { RunTimeLayoutConfig } from '@umijs/max';
import { DefaultFooter } from '@ant-design/pro-components';
import { RequestOptions } from './.umi/plugin-request/request';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { SelectLang } from '@umijs/max';
import { AvatarDropdown, AvatarName, Question } from './components';
import { Fragment } from 'react';

const isDev = process.env.NODE_ENV === 'development';
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
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_: any, avatarChildren: any) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    onPageChange: () => {
      const { location } = history;
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    rightContentRender: () => <Fragment />,
    links: isDev
      ? [
        <a key="openapi" href="https://waffleverse.gitbook.io/api/" target="_blank" rel="noreferrer">
          <LinkOutlined />
          <span>OpenAPI Docs</span>
        </a>,
      ]
      : []
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
