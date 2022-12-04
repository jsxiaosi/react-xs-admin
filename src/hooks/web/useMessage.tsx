// import { useI18n } from '@/hooks/web/useI18n';

import { message } from 'antd';

// const { t } = useI18n();

// function createElMessageBox(messageg: string, title: string, options: ElMessageBoxOptions) {
//   message
//     .config(messageg, title, options)
//     .then(() => {})
//     .catch(() => {});
// }

function createErrorModal(msg: string) {
  message.error(msg);
}

function createErrorMsg(msg: string) {
  message.error(msg);
}

export function useMessage() {
  return {
    createErrorModal,
    createErrorMsg,
  };
}
