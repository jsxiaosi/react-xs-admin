/**
 * pwa
 * https://vite-plugin-pwa.netlify.app
 */
import { VitePWA } from 'vite-plugin-pwa';

export function configPwaPlugin() {
  const options = {
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
    logLevel: 'silent',
    manifest: {
      name: '小斯管理后台模板',
      short_name: '小斯后台模板',
      description: '基于 vue3+vite+element-push 搭建的后台模板',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  };

  return VitePWA(options);
}
