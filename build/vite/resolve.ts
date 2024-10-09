import path from 'path';
import type { AliasOptions, ResolveOptions } from 'vite';

type myResolveOptions = ResolveOptions & { alias?: AliasOptions };

export function createViteResolve(myDirname: string): myResolveOptions {
  const viteResolve: myResolveOptions = {
    // 引用别名配置
    alias: {
      // 配置@别名
      '@': `${path.resolve(myDirname, 'src')}`,
      // 配置#别名
      '#': `${path.resolve(myDirname, 'types')}`,
    },
    // 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  };

  return viteResolve;
}
