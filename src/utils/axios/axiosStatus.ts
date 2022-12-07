import type { ErrorMessageMode } from '#/axios';
import { getIntlFormatMessage } from '@/locales';
import { createErrorModal, createErrorMsg } from '@/hooks/web/useMessage';

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: ErrorMessageMode = 'message',
): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    case 401:
      errMessage = getIntlFormatMessage('api.errMsg401');
      break;
    case 403:
      errMessage = getIntlFormatMessage('api.errMsg403');
      break;
    case 404:
      errMessage = getIntlFormatMessage('api.errMsg404');
      break;
    case 405:
      errMessage = getIntlFormatMessage('api.errMsg405');
      break;
    case 408:
      errMessage = getIntlFormatMessage('api.errMsg408');
      break;
    case 500:
      errMessage = getIntlFormatMessage('api.errMsg500');
      break;
    case 501:
      errMessage = getIntlFormatMessage('api.errMsg501');
      break;
    case 502:
      errMessage = getIntlFormatMessage('api.errMsg502');
      break;
    case 503:
      errMessage = getIntlFormatMessage('api.errMsg503');
      break;
    case 504:
      errMessage = getIntlFormatMessage('api.errMsg504');
      break;
    case 505:
      errMessage = getIntlFormatMessage('api.errMsg505');
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
