import initStore from './backendScripts/initStore';
import initEventsFeed from './backendScripts/initEventsFeed';
import initTimeTracker from './backendScripts/initTimeTracker';

const store = initStore();
initEventsFeed(store);
initTimeTracker(store);
