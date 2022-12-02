import { SettingOutlined } from '@ant-design/icons';
import { Divider, Drawer, theme, Tooltip } from 'antd';
import { memo, useState } from 'react';
import ThemeSettings from './ThemeSettings';
import { useLocale } from '@/locales';
import './index.less';
import type { AppConfigMode } from '@/store/modules/app';
import { useStoreApp } from '@/hooks/setting/useStoreApp';

const Setting = memo(() => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const { sidebarMode, setAppConfig } = useStoreApp();

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
        bodyStyle={{ padding: 0, height: '100%' }}
        closable={false}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="setting" style={{ color: thme.token.colorText }}>
          <Divider>{intl.formatMessage({ id: 'layout.setting.layoutSettings' })}</Divider>
          <div className="sidebar_seting">
            {sidebarSeting.map((i) => {
              return (
                <Tooltip placement="bottom" title={i.label} key={i.value}>
                  <div
                    className="sidebar_mode cursor"
                    style={{
                      border:
                        sidebarMode === i.value ? `2px solid ${thme.token.colorPrimary}` : 'none',
                    }}
                    onClick={() => setAppConfig({ sidebarMode: i.value })}
                  >
                    <div
                      style={{ background: i.value === 'blend' ? '' : thme.token.colorPrimary }}
                    />
                    <div
                      style={{ background: i.value === 'blend' ? thme.token.colorPrimary : '' }}
                    />
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
