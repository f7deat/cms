// 运行时配置
import { RequestConfig } from '@umijs/max';
import '../style.less';
import { RequestOptions } from './.umi/plugin-request/request';
import logo from './assets/logo.svg';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  domain: string;
}> {
  return { name: '@umijs/max', domain: 'https://dliti.com.au' };
}
export const layout = () => {
  return {
    logo: logo,
    menu: {
      locale: false,
    },
    layout: 'top',
  };
};

export const request: RequestConfig = {
  requestInterceptors: [
    (config: RequestOptions) => {
      const token = localStorage.getItem('def_token');
      config.baseURL = 'https://dliti.com.au/api/';
      config.headers = {
        authorization: `Bearer ${token}`,
      };
      return config;
    },
  ],
  responseInterceptors: [
    (res) => {
      return res;
    },
  ],
  errorConfig: {},
};
