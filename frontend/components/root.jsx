import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ipFindKey } from "../util/keys";
import App from './app';

$.getJSON(`https://ipfind.co/?ip=12.23.56.98&auth=${ipFindKey}`, result => {
  console.log('res', result);
});


const Root = ({ store, ip }) => (
  <Provider store={store} ip={ip}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;