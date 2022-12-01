import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { memo, useMemo } from 'react';
import SvgIcon from '../SvgIcon';
import type { LocaleType } from '@/locales';
import { useStoreApp } from '@/hooks/setting/useStoreApp';

const Locale = memo(() => {
  const { locale, setAppConfig } = useStoreApp();

  const menuItems: MenuProps['items'] = useMemo(() => {
    return [
      { label: '中文', key: 'zh-CN', disabled: locale === 'zh-CN' }, // 菜单项务必填写 key
      { label: 'English', key: 'en-US', disabled: locale === 'en-US' },
    ];
  }, [locale]);

  const menuClick: MenuProps['onClick'] = (info) => {
    setAppConfig({ locale: info.key as LocaleType });
  };

  return (
    <Dropdown
      menu={{ items: menuItems, onClick: menuClick }}
      placement="bottom"
      trigger={['click']}
    >
      <span>
        <SvgIcon name="locales" />
      </span>
    </Dropdown>
  );
});

export default Locale;
