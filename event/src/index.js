import initStore from './backendScripts/initStore';
import initEventsFeed from './backendScripts/initEventsFeed';
import initTimeTracker from './backendScripts/initTimeTracker';
import { preloadWallpaper, changeWallpaper } from './backendActions'

const store = initStore();

if (store.getState().appState.wallpaperQueue <= 3) {
	while (store.getState.appState.wallpaperQueue.length <= 3) {
		store.dispatch(preloadWallpaper());
	}	
} else {
	store.dispatch(changeWallpaper());
	store.dispatch(preloadWallpaper());
}

initEventsFeed(store);
initTimeTracker(store);
