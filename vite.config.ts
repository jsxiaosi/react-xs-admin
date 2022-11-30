import type { ConfigEnv, UserConfig } from 'vite';
import { createViteResolve } from './build/vite/resolve';
import { createVitePlugins } from './build/vite/plugins';

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv): UserConfig => {
  const { command } = configEnv;

  const isBuild = command === 'build';

  return {
    // 解析配置
    resolve: createViteResolve(__dirname),
    // 插件配置
    plugins: createVitePlugins(isBuild, configEnv),
    server: {
      host: true,
    },
  };
};
