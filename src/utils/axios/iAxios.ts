import { isFunction } from '@/utils/is';
import axios from 'axios';
import { cloneDeep } from 'lodash-es';
import type { RequestOptions, Result } from '#/axios';
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { CreateAxiosOptions } from './axiosConfig';

/**
 * @description: axios 模块
 */
export class IAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  /**
   * @description:  创建axios
   */
  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config);
  }

  /**
   * @description 获取拦截器配置
   */
  private getInterceptor() {
    const { interceptor } = this.options;
    return interceptor;
  }

  /**
   * @description: 重新配置 axios
   */
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) {
      return;
    }
    this.createAxios(config);
  }

  /**
   * @description 挂载拦截器
   */
  private setupInterceptors() {
    const interceptor = this.getInterceptor();
    if (!interceptor) {
      return;
    }
    const { requestInterceptors, requestInterceptorsCatch, responseInterceptors, responseInterceptorsCatch } =
      interceptor;

    // 此方法为了过滤不挂载interceptor没配置的拦截器

    // 请求拦截器配置
    requestInterceptors &&
      isFunction(requestInterceptors) &&
      this.axiosInstance.interceptors.request.use(requestInterceptors, undefined);

    // 请求拦截器失败配置
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch);

    // 响应拦截器配置
    responseInterceptors &&
      isFunction(responseInterceptors) &&
      this.axiosInstance.interceptors.response.use(responseInterceptors, undefined);

    // 响应拦截器失败配置
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch);
  }

  /**
   * @description get请求（config：axios请求配置, options：数据的特殊处理）
   */
  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request<T>({ ...config, method: 'GET' }, options);
  }

  /**
   * @description post请求（config：axios请求配置, options：数据的特殊处理）
   */
  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request<T>({ ...config, method: 'POST' }, options);
  }

  /**
   * @description put请求（config：axios请求配置, options：数据的特殊处理）
   */
  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request<T>({ ...config, method: 'PUT' }, options);
  }

  /**
   * @description delete请求（config：axios请求配置, options：数据的特殊处理）
   */
  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    return this.request<T>({ ...config, method: 'DELETE' }, options);
  }

  /**
   * @description 请求体
   */
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<Result<T>> {
    let conf: CreateAxiosOptions = cloneDeep(config);

    const interceptor = this.getInterceptor();

    const { requestOptions } = this.options;

    const opt: RequestOptions = Object.assign({}, requestOptions, options);

    const { beforeRequestHook, requestCatchHook, requestHook } = interceptor || {};
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt);
    }

    conf.requestOptions = opt;

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<T, AxiosResponse<Result<T>>>(conf)
        .then((res: AxiosResponse<Result<T>>) => {
          if (requestHook && isFunction(requestHook)) {
            try {
              resolve(requestHook(res, opt));
            } catch (err) {
              reject(err || new Error('request error!'));
            }
            return;
          }
          resolve(res as unknown as Promise<Result<T>>);
        })
        .catch((e: Error | AxiosError) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt));
            return;
          }
          if (axios.isAxiosError(e)) {
            // rewrite error message from axios in here
          }
          reject(e);
        });
    });
  }
}
