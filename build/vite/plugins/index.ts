import react from '@vitejs/plugin-react';
// import react from '@vitejs/plugin-react-swc';
import type { ConfigEnv, PluginOption } from 'vite';
import { configMockPlugin } from './mock';

// svg配置
import { configSvgPlugin } from './svg';

export function createVitePlugins(isBuild = false, _configEnv: ConfigEnv) {
  const vitePlugins: PluginOption[] = [];

  vitePlugins.push(
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  );

  vitePlugins.push(configSvgPlugin());

  vitePlugins.push(configMockPlugin(isBuild));

  return vitePlugins;
}
