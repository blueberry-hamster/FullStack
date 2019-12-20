import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

$.getJSON("https://ipfind.co/?ip=12.23.56.98&auth=93689cdc-104e-43cb-a5d7-e8470f0580e1", result => {
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