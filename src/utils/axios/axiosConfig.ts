import type { RequestOptions, Result } from '#/axios';
/**
 * axios 数据处理类
 */
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
  requestOptions?: RequestOptions;
  interceptor?: AxiosInterceptor;
}

type RequestInterceptorsConfig = Pick<CreateAxiosOptions, 'requestOptions' | 'interceptor'> &
  InternalAxiosRequestConfig;

export abstract class AxiosInterceptor {
  /**
   * @description: 请求前的配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /**
   * @description: 请求成功的处理
   */
  requestHook?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: RequestInterceptorsConfig) => RequestInterceptorsConfig;

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
