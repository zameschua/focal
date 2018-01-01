import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// wrapper function to initialize app inside chrome.storage.get callback
const proxyStore = new Store({portName: 'MAIN_STORE'});

render(
    <Provider store={proxyStore}>
    	<App />
    </Provider>
  , document.getElementById('app'));
