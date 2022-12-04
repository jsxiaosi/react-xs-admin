export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
export interface RequestOptions {
  // 网址前缀 留空使用默认
  urlPrefix?: string;
  // 设置token
  specialToken?: string;
  // 是否开启自定义请求报错提示
  errorMassge?: boolean;
  // 是否携带token
  withToken?: boolean;
  // 错误消息提示类型
  errorMessageMode?: ErrorMessageMode;
}
export interface Result<T = any> {
  code: number;
  message: string;
  data: T;
}
