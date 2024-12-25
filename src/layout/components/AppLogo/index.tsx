import logo from '@/assets/logo.png';
import { Image, theme } from 'antd';
import { memo } from 'react';
import './index.less';

const AppLogo = memo(() => {
  const thme = theme.useToken();

  return (
    <div className="app-logo">
      <div className="logo">
        <Image width={38} src={logo} preview={false} />
      </div>
      <div className="name" style={{ color: thme.token.colorText }}>
        xiaosiAdmin
      </div>
    </div>
  );
});

export default AppLogo;
