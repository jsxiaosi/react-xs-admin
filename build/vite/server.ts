import type { ServerOptions } from 'vite';

export function createViteServer(): ServerOptions {
  const viteServer: ServerOptions = {
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: true,
    // 服务器端口号
    port: 5173,
    // 端口已被占用时是否尝试使用下一个可用的端口 true：直接退出，而不是尝试下一个可用端口 false：尝试下一个可用端口
    strictPort: false,
    // boolean | string 启动项目时自动在浏览器打开应用程序；如果为string，比如"/index.html"，会打开http://localhost:5173/index.html
    // open: true,
    // boolean | CorsOptions  为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
    // cors: true,
    // 设置为 true 强制使依赖预构建。
    // force: false,
    // 自定义代理规则
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  };
  return viteServer;
}
