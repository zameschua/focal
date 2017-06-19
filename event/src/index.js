import {createStore} from 'redux';
import reducers from './reducers/index';
import {wrapStore} from 'react-chrome-redux';


/**
	Redux store is created here. wrapStore allows for other js files to connect to Redux store.
	By specifying the same "portName", other js files are able to create proxy stores to the Redux store.
**/

let initialState = {};
const store = createStore(reducers, initialState);

wrapStore(store, {
  portName: 'Todo-List'
});
