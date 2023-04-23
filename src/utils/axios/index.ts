import { isString } from 'lodash-es';
import { defineMessages } from 'react-intl';
import type { AxiosInterceptor, CreateAxiosOptions } from './axiosConfig';
import { iAxios } from './iAxios';
import { checkStatus } from './axiosStatus';
import { errorData } from './errorConfig';
import { createErrorModal, createErrorMsg } from '@/hooks/web/useMessage';

/**
 * @description:一下所有拦截器请根据自身使用场景更改
 */
const interceptor: AxiosInterceptor = {
  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  requestHook: (res, options) => {
    /**
     * 此处方法是对请求回来的数据进行处理，
     * 根据自己的使用场景更改
     */
    const { data } = res;
    const { errorMessageMode } = options;
    if (data) {
      if (data.code === -1) {
        console.log(
          defineMessages({
            foo: {
              id: 'app.text',
              defaultMessage: 'foo',
              description: 'bar',
            },
          }),
        );
        if (errorMessageMode === 'modal') {
          createErrorModal(data.message);
        } else if (errorMessageMode === 'message') {
          createErrorMsg(data.message);
        }
        return errorData(res);
      } else {
        const { code, data: dataInfo, message } = data;
        if (!code && !dataInfo && !message) {
          const toData = {
            code: 1,
            data: data,
            message: 'ok',
          };
          return toData;
        }
      }
    }
    return data;
  },

  /**
   * @description: 请求失败的错误处理
   */
  requestCatchHook: (e, _options) => {
    return Promise.reject(e);
  },

  /**
   * @description: 请求之前处理config
   */
  beforeRequestHook: (config, options) => {
    const { urlPrefix } = options;
    if (urlPrefix && isString(urlPrefix)) config.url = `${urlPrefix}${config.url}`;
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config) => {
    const { requestOptions } = config;
    if (requestOptions?.withToken) {
      (config as Recordable).headers._token = 'myToken';
      if (requestOptions?.specialToken)
        (config as Recordable).headers._token = requestOptions?.specialToken;
    }

    return config;
  },

  /**
   * @description: 请求拦截器错误处理
   */
  requestInterceptorsCatch: (error) => {
    return error;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res) => {
    return res;
  },

  /**
   * @description: 响应拦截器错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const { response, message, config } = error || {};
    const errorMessageMode = config.requestOptions.errorMessageMode || 'none';
    checkStatus(response ? response.status : 404, message, errorMessageMode);
    return error;
  },
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new iAxios({
    ...{
      acoisadmisf: '',
      // 请求时间
      timeout: 10 * 1000,
      // (拦截器)数据处理方式
      interceptor,
      headers: { 'Content-Type': 'application/json' },
      baseURL: '',
      // 配置项（需要在拦截器中做的处理），下面的选项都可以在独立的接口请求中覆盖
      requestOptions: {
        withToken: true,
        errorMessageMode: 'message',
      },
    },
    ...(opt || {}),
  });
}
export const deffHttp = createAxios();
