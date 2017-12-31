import { createStore, applyMiddleware } from "redux";
import { wrapStore } from "react-chrome-redux";
import logger from 'redux-logger';
import rootReducer from '../reducers';
import asyncActionsMiddleware from '../middlewares/asyncActionsMiddleware';

const initStore = () => {
  const initialState = localStorage.MAIN_STORE
    ? JSON.parse(localStorage.MAIN_STORE)
    : {};

  // Create Redux store
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(asyncActionsMiddleware, logger)
  );

  // Every time the state changes, update state stored in chrome.storage
  // unsubscribe() to stop listening to state updates
  function handleChange() {
    localStorage.setItem('MAIN_STORE', JSON.stringify(store.getState()));
  }

  const unsubscribe = store.subscribe(handleChange);

  // Wrap it in proxy so that front end is able to retrieve it (react-chrome-redux package)
  wrapStore(store, {
    portName: 'MAIN_STORE'
  });

  return store;
};

export default initStore;
