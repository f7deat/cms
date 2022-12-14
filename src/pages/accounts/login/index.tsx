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
import { FormattedHTMLMessage, useIntl } from '@umijs/max';
import { history, useModel } from '@umijs/max';
import { message, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import bg from '../../../assets/bg-login.svg';
import logo from '../../../assets/logo.svg';
import './index.css';

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
              label: 'T??i kho???n',
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
                  message: 'Vui l??ng nh???p s??? ??i???n tho???i',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: 'S??? ??i???n tho???i kh??ng h???p l???',
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
              placeholder="M?? x??c nh???n"
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return 'L???y m?? + ' + count;
                }
                return 'L???y m??';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: 'Vui l??ng nh???p m?? x??c nh???n!',
                },
              ]}
              onGetCaptcha={async (phone) => {
                message.success('???? g???i m?? x??c minh t???i: ' + phone);
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
          <a
            style={{
              float: 'right',
            }}
          >
            <FormattedHTMLMessage id="pages.login.forgotPassword" />
          </a>
        </div>
      </LoginForm>
    </div>
  );
};

export default Login;
