import { createErrorModal, createErrorMsg } from '@/hooks/web/useMessage';
import { getIntlText } from '@/locales';
import type { ErrorMessageMode } from '#/axios';

export function checkStatus(status: number, msg: string, errorMessageMode: ErrorMessageMode = 'message'): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    case 401:
      errMessage = getIntlText('api.errMsg401');
      break;
    case 403:
      errMessage = getIntlText('api.errMsg403');
      break;
    case 404:
      errMessage = getIntlText('api.errMsg404');
      break;
    case 405:
      errMessage = getIntlText('api.errMsg405');
      break;
    case 408:
      errMessage = getIntlText('api.errMsg408');
      break;
    case 500:
      errMessage = getIntlText('api.errMsg500');
      break;
    case 501:
      errMessage = getIntlText('api.errMsg501');
      break;
    case 502:
      errMessage = getIntlText('api.errMsg502');
      break;
    case 503:
      errMessage = getIntlText('api.errMsg503');
      break;
    case 504:
      errMessage = getIntlText('api.errMsg504');
      break;
    case 505:
      errMessage = getIntlText('api.errMsg505');
      break;
    default:
  }
  if (errMessage) {
    if (errorMessageMode === 'modal') {
      createErrorModal(errMessage);
    } else if (errorMessageMode === 'message') {
      createErrorMsg(errMessage);
    }
  }
}
