import logo from '@/assets/logo.png';
import AppLocale from '@/components/AppLocale';
import AppTheme from '@/components/AppTheme';
import { useLocale } from '@/locales';
import { initAsyncRoute } from '@/router/utils';
import { getUserInfo } from '@/server/useInfo';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setUserInfo } from '@/store/modules/user';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Image, Input, theme } from 'antd';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import type { LoginForm } from './type';

const Login = memo(() => {
  const intl = useLocale();

  const thme = theme.useToken();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: LoginForm) => {
    setLoading(true);
    const res = await getUserInfo(values.username, values.password);
    if (res.code === 1) {
      await initAsyncRoute(res.data.power);
      dispatch(setUserInfo(res.data));
    }

    setLoading(false);
  };

  const userStore = useAppSelector(state => state.user);

  useEffect(() => {
    if (userStore.power) {
      navigate('/home');
    }
  }, [userStore]);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative"
      style={{ backgroundColor: thme.token.colorBgContainer, color: thme.token.colorText }}
    >
      <div className="flex flex-row justify-center items-center absolute top-3 right-3 gap-3">
        <AppLocale />
        <AppTheme />
      </div>
      <div className="p-10" style={{ boxShadow: '0 15px 25px #0009' }}>
        <div className="mb-10 flex flex-row items-center justify-center ">
          <Image src={logo} width={44} height={44} preview={false} />
          <h2 className="m-0 ml-4">React Xs Admin</h2>
        </div>
        <Form
          className="w-[360px]"
          name="normal_login"
          size="large"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item<LoginForm>
            name="username"
            rules={[{ required: true, message: intl.formatMessage({ id: 'login.userNameRules' }) }]}
          >
            <Input prefix={<UserOutlined />} placeholder={intl.formatMessage({ id: 'login.username' })} allowClear />
          </Form.Item>
          <Form.Item<LoginForm>
            name="password"
            rules={[{ required: true, message: intl.formatMessage({ id: 'login.passwordRules' }) }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={intl.formatMessage({ id: 'login.password' })}
              allowClear
            />
          </Form.Item>
          <Form.Item<LoginForm>>
            <div className="flex flex-row justify-between items-center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{intl.formatMessage({ id: 'login.rememberPassword' })}</Checkbox>
              </Form.Item>

              <Button type="link" className="p-0" style={{ color: thme.token.colorPrimary }}>
                {intl.formatMessage({ id: 'login.forgotPassword' })}
              </Button>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
              {intl.formatMessage({ id: 'login.button' })}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
});

export default Login;
