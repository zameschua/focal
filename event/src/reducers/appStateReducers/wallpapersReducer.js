const INITIAL_STATE = {
  wallpaperQueue: [],
  nextWallpaper: '',
};

const wallpapersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PRELOAD_WALLPAPER_SUCCESS':
      // Put pre-loaded wallpaper as next wallpaper on first load
      if (state.nextWallpaper === '' || state.nextWallpaper === undefined) {
        return {
          wallpaperQueue: [...state.wallpaperQueue],
          nextWallpaper: action.payload,
        };
      }
      return {
        wallpaperQueue: [...state.wallpaperQueue, action.payload],
        nextWallpaper: state.nextWallpaper,
      };

    // Dequeue the last wallpaper and make it the next wallpaper to load
    case 'CHANGE_WALLPAPER':
      return {
        wallpaperQueue: state.wallpaperQueue.slice(1),
        nextWallpaper: state.wallpaperQueue[0],
      };
    default:
      return state;
  }
};

export default wallpapersReducer;
