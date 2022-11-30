import { memo } from 'react';
import './index.less';

interface SvgIconType {
  prefix?: string;
  name: string;
  color?: string;
  className?: string;
}

const SvgIcon = memo((props: SvgIconType) => {
  const { prefix, name, color, className } = props;
  return (
    <i className="svg-icon">
      <svg className={`svg ${className || ''}`} aria-hidden={true}>
        <use xlinkHref={`#${prefix || 'icon'}-${name}`} fill={color || '#333'} />
      </svg>
    </i>
  );
});

export default SvgIcon;
