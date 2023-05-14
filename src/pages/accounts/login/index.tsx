import { login } from '@/services/user';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  SelectOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedHTMLMessage, Link, SelectLang, useIntl } from '@umijs/max';
import { history, useModel } from '@umijs/max';
import { message, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import logo from '../../../assets/logo.svg';
import '../index.css';

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      localStorage.setItem('wf_URL', values.baseURL);
      const msg = await login({ ...values, type });
      if (!msg.succeeded) {
        return message.error('Login failed!');
      }
      localStorage.setItem('wf_token', msg.token);
      await fetchUserInfo();
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
    } catch (error) {
      message.error('Login failed!');
    }
  };

  return (
    <div className="flex items-center relative h-screen">
      <div className='fixed'>
        <SelectLang />
      </div>
      <LoginForm
        logo={<img alt="logo" src={logo} />}
        title="Waffle"
        subTitle={intl.formatMessage({ id: 'pages.login.subTitle' })}
        initialValues={{
          autoLogin: true,
        }}
        actions={[
          <div key={2} className="mb-4 text-center">
            <FormattedHTMLMessage id="pages.login.orLoginWith" />
          </div>,
          <div className="text-center" key={3}>
            <Space align="center">
              <AlipayCircleOutlined
                key="AlipayCircleOutlined"
                style={{ fontSize: '1.5rem' }}
              />
              <TaobaoCircleOutlined
                key="TaobaoCircleOutlined"
                style={{ fontSize: '1.5rem' }}
              />
              <WeiboCircleOutlined
                key="WeiboCircleOutlined"
                style={{ fontSize: '1.5rem' }}
              />
            </Space>
          </div>,
        ]}
        onFinish={async (values) => {
          await handleSubmit(values as any);
        }}
      >
        <Tabs
          activeKey={type}
          onChange={setType}
          centered
          items={[
            {
              key: 'account',
              label: 'Tài khoản',
            },
            {
              key: 'mobile',
              label: intl.formatMessage({
                id: 'general.phoneNumber',
                defaultMessage: 'Phone number',
              }),
            },
          ]}
        />
        {type === 'account' && (
          <>
            <ProFormText
              name="baseURL"
              fieldProps={{
                size: 'large',
                prefix: <SelectOutlined />,
              }}
              placeholder="Website url"
            ></ProFormText>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input email!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password',
              })}
              rules={[
                {
                  required: true,
                  message: 'Please input password!',
                },
              ]}
            />
          </>
        )}

        {type === 'mobile' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined />,
              }}
              name="mobile"
              placeholder={intl.formatMessage({
                id: 'general.phoneNumber',
                defaultMessage: 'Phone number',
              })}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập số điện thoại',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: 'Số điện thoại không hợp lệ',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder="Mã xác nhận"
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return 'Lấy mã + ' + count;
                }
                return 'Lấy mã';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mã xác nhận!',
                },
              ]}
              onGetCaptcha={async (phone) => {
                message.success('Đã gửi mã xác minh tới: ' + phone);
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            <FormattedHTMLMessage id="pages.login.rememberMe" />
          </ProFormCheckbox>
          <div
            style={{
              float: 'right',
            }}
          >
            <Link to="/accounts/forgot-password">
              <FormattedHTMLMessage id="pages.login.forgotPassword" />
            </Link>
          </div>
        </div>
      </LoginForm>
    </div>
  );
};

export default Login;
