import eventsFeedApiCall from './eventsFeedApiCall';
import preloadAndDispatchWallpaper from './preloadAndDispatchWallpaper';

const asyncActionsMiddleware = store => next => action => {
  if (action.async) {
    switch (action.type) {
      case 'GET_CALENDAR_EVENTS':
        // Authenticate the user using Chrome identity API
        // Get the token again anyways in case it has expired
        chrome.identity.getAuthToken({ interactive: false }, token => {
          // Grab calendar events and update the store
          eventsFeedApiCall(token, store);
        });
        return next(action);
      case 'PRELOAD_WALLPAPER':
        preloadAndDispatchWallpaper(store);
        return next(action);
      default:
        return next(action);
    }
  } else {
    return next(action);
  }
};

export default asyncActionsMiddleware;
