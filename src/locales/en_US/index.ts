import api from './modules/api.json';
import layout from './modules/layout.json';
import login from './modules/login.json';

const en_US = {
  ...layout,
  ...api,
  ...login,
};

export default en_US;
