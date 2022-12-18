import { Spin } from 'antd';
import { memo } from 'react';

const LayoutSpin = memo(() => {
  return (
    <div className="supense-loading">
      <Spin size="large" />
    </div>
  );
});

export default LayoutSpin;
