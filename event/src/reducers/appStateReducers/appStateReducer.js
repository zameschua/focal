import userAuthenticationReducer from './userAuthenticationReducer';
import wallpapersReducer from './wallpapersReducer';

const INITIAL_STATE = {
  userHasAuthenticated: false,
  cachedWallpapers: {
    wallpaperQueue: [],
    nextWallpaper: '',
  },
};

// Combine reducers for todoList
function appStateReducer(state = INITIAL_STATE, action) {
  return {
    userHasAuthenticated: userAuthenticationReducer(
      state.userHasAuthenticated,
      action
    ),
    cachedWallpapers: wallpapersReducer(state.cachedWallpapers, action),
  };
}

export default appStateReducer;
