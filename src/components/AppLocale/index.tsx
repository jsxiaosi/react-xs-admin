import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppLocale } from '@/store/modules/app';
import { Dropdown } from 'antd';
import { memo, useMemo } from 'react';
import type { LocaleType } from '@/locales';
import type { MenuProps } from 'antd';
import SvgIcon from '../SvgIcon';

const Locale = memo(() => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector(state => state.app.locale);

  const menuItems: MenuProps['items'] = useMemo(() => {
    return [
      { label: '中文', key: 'zh-CN', disabled: locale === 'zh-CN' }, // 菜单项务必填写 key
      { label: 'English', key: 'en-US', disabled: locale === 'en-US' },
    ];
  }, [locale]);

  const menuClick: MenuProps['onClick'] = info => {
    dispatch(setAppLocale(info.key as LocaleType));
  };

  return (
    <Dropdown menu={{ items: menuItems, onClick: menuClick }} placement="bottom" trigger={['click']}>
      <span style={{ fontSize: '1em' }}>
        <SvgIcon name="locales" />
      </span>
    </Dropdown>
  );
});

export default Locale;
