import initStore from './backendScripts/initStore';
import initEventsFeed from './backendScripts/initEventsFeed';
import initTimeTracker from './backendScripts/initTimeTracker';
import { preloadWallpaper, changeWallpaper } from './backendActions'

const store = initStore();


if (store.getState().appState.cachedWallpapers.wallpaperQueue.length <= 1) {
	store.dispatch(preloadWallpaper());
	store.dispatch(preloadWallpaper());
	store.dispatch(preloadWallpaper());
}

store.dispatch(changeWallpaper());
store.dispatch(preloadWallpaper());

initEventsFeed(store);
initTimeTracker(store);


