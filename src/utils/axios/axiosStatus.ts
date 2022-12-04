import { message } from 'antd';
import type { ErrorMessageMode } from '#/axios';
// import i18n from '@/locales';
// import { useMessage } from '@/hooks/web/useMessage';
// const { createErrorModal, createErrorMsg } = useMessage();

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  // const { t } = i18n.global;
  const errMessage = '';

  // switch (status) {
  //   case 400:
  //     errMessage = `${msg}`;
  //     break;
  //   case 401:
  //     errMessage = t('api.errMsg401');
  //     break;
  //   case 403:
  //     errMessage = t('api.errMsg403');
  //     break;
  //   case 404:
  //     errMessage = t('api.errMsg404');
  //     break;
  //   case 405:
  //     errMessage = t('api.errMsg405');
  //     break;
  //   case 408:
  //     errMessage = t('api.errMsg408');
  //     break;
  //   case 500:
  //     errMessage = t('api.errMsg500');
  //     break;
  //   case 501:
  //     errMessage = t('api.errMsg501');
  //     break;
  //   case 502:
  //     errMessage = t('api.errMsg502');
  //     break;
  //   case 503:
  //     errMessage = t('api.errMsg503');
  //     break;
  //   case 504:
  //     errMessage = t('api.errMsg504');
  //     break;
  //   case 505:
  //     errMessage = t('api.errMsg505');
  //     break;
  //   default:
  // }
  if (errMessage) {
    if (errorMessageMode === 'modal') {
      message.error(msg);
    } else if (errorMessageMode === 'message') {
      message.error(msg);
    }
  }
}
