import userNameReducer from './userNameReducer';
import wallpapersReducer from './wallpapersReducer';

const INITIAL_STATE = {
	userName: "",
		cachedWallpapers: {
			wallpaperQueue: [],
			nextWallpaper: "",
		},
}

// Combine reducers for todoList
function appStateReducer(state = INITIAL_STATE, action) {
  return {
    userName: userNameReducer(state.userName, action), // ADD THIS LATER
  	cachedWallpapers: wallpapersReducer(state.cachedWallpapers, action),
  }
}

export default appStateReducer;