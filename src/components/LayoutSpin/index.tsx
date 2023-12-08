import { Spin, theme } from 'antd';
import { memo } from 'react';

const LayoutSpin = memo(() => {
  const thme = theme.useToken();

  return (
    <div className="supense-loading" css={{ backgroundColor: thme.token.colorBgContainer }}>
      <Spin size="large" />
    </div>
  );
});

export default LayoutSpin;
