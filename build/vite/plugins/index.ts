import react from '@vitejs/plugin-react';
import type { ConfigEnv, PluginOption } from 'vite';

// svg配置
import { configSvgPlugin } from './svg';

export function createVitePlugins(_isBuild = false, _configEnv: ConfigEnv) {
  const vitePlugins: PluginOption[] = [];

  vitePlugins.push(react());

  vitePlugins.push(configSvgPlugin());

  return vitePlugins;
}
