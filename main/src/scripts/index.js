import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../../../event/src/reducers/index';

/**
	Main dashboard work to be done here.
**/

// create new proxy store
const proxyStore = new Store({portName: 'Todo-List'});

const proxyStore2 = createStore(reducers,{});

console.log("State of proxyStore: ");
console.log(proxyStore);
console.log(proxyStore.getState());
console.log("State of proxyStore2: ");
console.log(proxyStore2);
console.log(proxyStore2.getState());

// Every time the state changes, log it and update state stored in localStorage
// unsubscribe() to stop listening to state updates
function handleChange() {
	//console.log(proxyStore.getState())
	//localStorage.setItem("state",JSON.stringify(store.getState()))
}

let unsubscribe = proxyStore.subscribe(handleChange);

render(
    <Provider store={proxyStore}>
    	<App />
    </Provider>
  , document.getElementById('app'));
