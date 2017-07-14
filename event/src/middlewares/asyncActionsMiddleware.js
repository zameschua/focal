import {  updateUserAuthenticationStatus, preloadWallpaperSuccess  } from '../backendActions/index';
import eventsFeedApiCall from './eventsFeedApiCall';
import preloadAndDispatchWallpaper from './preloadAndDispatchWallpaper';

const asyncActionsMiddleware = store => next => action => {
  if (action.async) {
  	switch (action.type) {
  		case 'GET_CALENDAR_EVENTS':
  			// Get the token again anyways in case it has expired
			  chrome.identity.getAuthToken({ 'interactive': false }, function(token) {
			  	eventsFeedApiCall(token, store);
			    store.dispatch(updateUserAuthenticationStatus(true));
			  });
      case 'PRELOAD_WALLPAPER':
      	preloadAndDispatchWallpaper(store);
		  default:
			  return next(action);
		}
	} else {
		return next(action);
	}
}

export default asyncActionsMiddleware;




