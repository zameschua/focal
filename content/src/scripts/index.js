import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';

/**
	Chrome content-script functions go here
**/

const proxyStore = new Store({portName: 'main'}); // communication port name

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

render(
  <Provider store={proxyStore}>
    <App/>
  </Provider>
  , document.getElementById('rcr-anchor'));
