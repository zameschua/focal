import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './TodoList/reducers/index';

/**
	Create a local store to keep track of states of to-do list

	Render the application with the local store as provider
**/

// wrapper function to initialize app inside chrome.storage.get callback
const initApp = (initialState) => {
	const store = createStore(reducers,initialState);

	// Every time the state changes, log it and update state stored in chrome.storage
	// unsubscribe() to stop listening to state updates
	function handleChange() {
		chrome.storage.local.set({'TodoListStore': store.getState()}, () => {
			console.log("todoList state saved");
		});
	}

	let unsubscribe = store.subscribe(handleChange);

	render(
	    <Provider store={store}>
	    	<App />
	    </Provider>
	  , document.getElementById('app'));
};

chrome.storage.local.get("TodoListStore", (items) => {
	let initialState = items["TodoListStore"];

	initApp(initialState);

});
