export type StorageValue<T> = T | null | undefined;

export type StorageType = 'localStorage' | 'sessionStorage';

export interface StorageConfig {
  prefix: string;
  expire: number;
  isEncrypt: boolean;
}
