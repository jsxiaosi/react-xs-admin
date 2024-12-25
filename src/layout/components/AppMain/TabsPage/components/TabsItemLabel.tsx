import { Dropdown } from 'antd';
import { useMemo, useState } from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import type { MenuProps } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import { useTabsChange } from '../hooks/useTabsChange';
import { useTabsState } from '../hooks/useTabsState';
import type { RightClickTags } from '../hooks/useTabsState';

interface TabsItemLabelProps {
  pathKey: string;
  children: ReactNode;
  eventType?: 'click' | 'ContextMenu';
  className?: string;
  style?: CSSProperties;
  css?: Interpolation<Theme>;
}

const TabsItemLabel = ({ pathKey, eventType, className, style, css, children }: TabsItemLabelProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { menuItems } = useTabsState(pathKey, open);
  const { onTabsDropdownChange } = useTabsChange();

  const menuClick: MenuProps['onClick'] = e => {
    e.domEvent.stopPropagation();
    onTabsDropdownChange(e.key as RightClickTags['code'], pathKey);
  };

  const contentProps: React.DOMAttributes<HTMLDivElement> = useMemo(() => {
    if (eventType === 'click') {
      return {
        onClick: e => {
          e.preventDefault();
          setOpen(!open);
        },
      };
    } else {
      return {
        onContextMenu: e => {
          e.preventDefault();
          setOpen(!open);
        },
      };
    }
  }, [eventType]);

  return (
    <Dropdown
      open={open}
      menu={{
        items: menuItems,
        onClick: menuClick,
      }}
      onOpenChange={visible => !visible && setOpen(visible)}
    >
      <div className={className} style={style} {...contentProps} css={css}>
        {children}
      </div>
    </Dropdown>
  );
};

export default TabsItemLabel;
