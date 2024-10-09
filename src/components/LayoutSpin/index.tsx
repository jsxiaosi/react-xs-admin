import { Spin, theme } from 'antd';
import { memo, useMemo } from 'react';

interface LayoutSpinProps {
  position?: 'fixed' | 'absolute';
}

const LayoutSpin = memo((props: LayoutSpinProps) => {
  const thme = theme.useToken();

  const position = useMemo(() => {
    if (props.position) return `${props.position} top-0 left-0 z-40`;
    else return '';
  }, [props.position]);

  return (
    <div className={`supense-loading ${position}`} css={{ backgroundColor: thme.token.colorBgContainer }}>
      <Spin size="large" />
    </div>
  );
});

export default LayoutSpin;
