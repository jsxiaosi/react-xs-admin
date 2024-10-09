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
    <span className={`svg-icon ${className || ''}`}>
      <svg className="svg" aria-hidden>
        <use xlinkHref={`#${prefix || 'icon'}-${name}`} fill={color || '#333'} />
      </svg>
    </span>
  );
});

export default SvgIcon;
