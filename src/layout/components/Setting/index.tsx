import { useLocale } from '@/locales';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppSidebarMode } from '@/store/modules/app';
import { SettingOutlined } from '@ant-design/icons';

import { Divider, Drawer, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import { memo, useState } from 'react';
import type { AppConfigMode } from '@/store/modules/app';
import { getSidebarMode } from './style';
import ThemeSettings from './ThemeSettings';

const Setting = memo(() => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const sidebarMode = useAppSelector(state => state.app.sidebarMode);

  const thme = theme.useToken();

  const intl = useLocale();

  const sidebarSeting: { label: string; value: AppConfigMode['sidebarMode'] }[] = [
    {
      label: '左侧菜单模式',
      value: 'vertical',
    },
    {
      label: '顶部菜单模式',
      value: 'horizontal',
    },
    {
      label: '混合菜单模式',
      value: 'blend',
    },
  ];

  return (
    <>
      <SettingOutlined onClick={() => setDrawerOpen(true)} />
      <Drawer
        width={300}
        title={intl.formatMessage({ id: 'layout.setting.title' })}
        placement="right"
        styles={{ body: { padding: 0, height: '100%' } }}
        closable={false}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="setting" css={getSidebarMode(thme.token)}>
          <Divider>{intl.formatMessage({ id: 'layout.setting.layoutSettings' })}</Divider>
          <div className="sidebar_seting">
            {sidebarSeting.map(i => {
              return (
                <Tooltip placement="bottom" title={i.label} key={i.value}>
                  <div
                    className={classNames('cursor', 'sidebar_mode', {
                      'sidebar_mode-select': sidebarMode === i.value,
                    })}
                    onClick={() => {
                      dispatch(setAppSidebarMode(i.value));
                    }}
                  >
                    <div />
                    <div />
                  </div>
                </Tooltip>
              );
            })}
          </div>
          <Divider>{intl.formatMessage({ id: 'layout.setting.themeSettings' })}</Divider>

          <ThemeSettings />
        </div>
      </Drawer>
    </>
  );
});

export default Setting;
