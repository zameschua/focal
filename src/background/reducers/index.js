import eventsFeedReducer from './EventsFeedReducers/eventsFeedReducer';
import appStateReducer from './appStateReducers/appStateReducer';

const INITIAL_STATE = {
  eventsFeed: {
    events: [],
  },
  appState: {
    userHasAuthenticated: false,
    cachedWallpapers: {
      wallpaperQueue: [],
      nextWallpaper: '',
    },
  },
};

export default function rootReducer(state = INITIAL_STATE, action) {
  return {
    eventsFeed: eventsFeedReducer(state.eventsFeed, action),
    appState: appStateReducer(state.appState, action),
  };
}

/*
State Tree

store = {
	todoList: {
	  todos: [
      id: NUMBER,
      completed: BOOLEAN,
      text: STRING
	  ],
	  visibilityFilter: STRING
	}
	timeTracker: {
		URL: []
	},
    eventsFeed: {
	  userHasAuthenticated: BOOLEAN
	  events: [{
		fullDayEvents: [],
		events: []
	  } * 7 days];
    },
  appState: {
		sidePanelsVisible: BOOLEAN,
		userName: STRING,
		cachedWallpapers:
			wallpaperQueue: QUEUE,
			nextWallpaper: STRING (URL),
	},
	habitsTracker: {
		showAddSiteModal: BOOLEAN,
		habitSites: [
			{
		    id: NUMBER,
		    completed: BOOLEAN,
		    url: STRING,
		    atMost: BOOLEAN,
		    duration: NUMBER,
		    timeSpent: NUMBER;
	    }
		],
		pastRecords: [
			{
				date: moment date object,
				completed: NUMBER,
				incomplete: NUMBER,
			}
		]
	}
}
*/
