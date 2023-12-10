/// <reference types="vite/client" />

declare interface ViteEnv {
  readonly VITE_ENV: string;
  readonly VITE_KEY_ALIVE: 'TRUE' | 'FALSE';
}

interface ImportMetaEnv extends ViteEnv {
  _: unknown;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
