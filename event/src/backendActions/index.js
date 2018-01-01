export const updateUserAuthenticationStatus = status => ({
  type: 'UPDATE_USER_AUTHENTICATION_STATUS',
  payload: status,
});

export const getCalendarEventsSuccess = payload => ({
  type: 'GET_CALENDAR_EVENTS_SUCCESS',
  payload,
});

export const getCalendarEventsFailure = payload => ({
  type: 'GET_CALENDAR_EVENTS_FAILURE',
  payload,
});

export const getCalendarEvents = () => ({
  type: 'GET_CALENDAR_EVENTS',
  async: true,
});

// appState actions
export const changeWallpaper = () => ({
  type: 'CHANGE_WALLPAPER',
});

export const preloadWallpaper = () => ({
  type: 'PRELOAD_WALLPAPER',
  async: true,
});

export const preloadWallpaperSuccess = newWallpaperId => ({
  type: 'PRELOAD_WALLPAPER_SUCCESS',
  payload: newWallpaperId,
});

// HabitSites actions

export const addHabitSiteTime = url => ({
  type: 'ADD_HABIT_SITE_TIME',
  payload: {
    url,
  },
});

export const toggleCompleted = url => ({
  type: 'TOGGLE_COMPLETED',
  payload: {
    url,
  },
});

export const addDailyRecord = (date, completed, incomplete) => ({
  type: 'ADD_DAILY_RECORD',
  payload: {
    date,
    completed,
    incomplete,
  },
});

export const resetCompletedStatus = () => ({
  type: 'RESET_COMPLETED_STATUS',
  payload: {},
});
