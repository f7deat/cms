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
import { useIntl } from '@umijs/max';
import { history, useModel } from '@umijs/max';
import { message, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import bg from '../../../assets/bg-login.svg';
import logo from '../../../assets/logo.svg';
import '../../../../style.css';

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
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
      className="flex items-center"
    >
      <LoginForm
        logo={<img alt="logo" src={logo} />}
        title="Waffle"
        subTitle={intl.formatMessage({ id: 'pages.login.subTitle' })}
        initialValues={{
          autoLogin: true,
        }}
        actions={[
          <div key={2} className="mb-4 text-center">
            Hoặc đăng nhập với
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
              label: 'Số điện thoại',
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
              placeholder="đường dẫn website"
            ></ProFormText>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder="用户名: admin or user"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder="密码: ant.design"
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
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
              placeholder="手机号"
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
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
              placeholder="请输入验证码"
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return '获取验证码 + ' + count;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码',
                },
              ]}
              onGetCaptcha={async (phone) => {
                message.success('获取验证码成功！验证码为：1234' + phone);
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
            Nhớ mật khẩu?
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            Quên mật khẩu
          </a>
        </div>
      </LoginForm>
    </div>
  );
};

export default Login;
