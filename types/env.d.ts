/// <reference types="vite/client" />

declare interface ViteEnv {
  readonly VITE_ENV: string;
}

interface ImportMetaEnv extends ViteEnv {
  _: unknown;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
