import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// wrapper function to initialize app inside chrome.storage.get callback
const initApp = (initialState) => {
	const proxyStore = new Store({portName: 'MAIN_STORE'});
	console.log(proxyStore);

	// Every time the state changes, log it and update state stored in chrome.storage
	// unsubscribe() to stop listening to state updates
	function handleChange() {
		console.log(proxyStore.getState());
		chrome.storage.local.set({'TodoListStore': proxyStore.getState()}, () => {
			console.log("todoList state saved");
		});
	}

	let unsubscribe = proxyStore.subscribe(handleChange);

	render(
	    <Provider store={proxyStore}>
	    	<App />
	    </Provider>
	  , document.getElementById('app'));
};

chrome.storage.local.get("TodoListStore", (items) => {
	console.log("todoList state gotten");
	console.log(items["TodoListStore"]);
	let initialState = items["TodoListStore"];

	initApp(initialState);

});
