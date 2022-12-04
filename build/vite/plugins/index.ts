import react from '@vitejs/plugin-react';
import type { ConfigEnv, PluginOption } from 'vite';
import { configMockPlugin } from './mock';

// svg配置
import { configSvgPlugin } from './svg';

export function createVitePlugins(isBuild = false, _configEnv: ConfigEnv) {
  const vitePlugins: PluginOption[] = [];

  vitePlugins.push(react());

  vitePlugins.push(configSvgPlugin());

  vitePlugins.push(configMockPlugin(isBuild));

  return vitePlugins;
}
