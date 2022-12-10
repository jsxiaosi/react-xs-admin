import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';
import 'virtual:svg-icons-register';

const routeDOM = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const RootRender = (
  <Provider store={store}>
    <App />
  </Provider>
);

routeDOM.render(RootRender);
