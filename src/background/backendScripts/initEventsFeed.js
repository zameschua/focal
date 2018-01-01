import { getCalendarEvents } from '../backendActions/index';

const initEventsFeed = store => {
  // Grab the calendar events if user has already authenticated with Google
  if (store.getState().eventsFeed.userHasAuthenticated) {
    store.dispatch(getCalendarEvents());
  }
};

export default initEventsFeed;
