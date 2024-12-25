import api from './modules/api.json';
import layout from './modules/layout.json';
import login from './modules/login.json';

const zh_CN = {
  ...layout,
  ...api,
  ...login,
};

export default zh_CN;
