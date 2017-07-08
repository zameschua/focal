import todoListReducer from './TodoListReducers/todoListReducer';
import timeTrackerReducer from './TimeTrackerReducers/timeTrackerReducer';
import eventsFeedReducer from './EventsFeedReducers/eventsFeedReducer'

const INITIAL_STATE = {
	todoList: {
	  todos: [],
	  visibilityFilter: "SHOW_ALL"
	},
	timeTracker: {
		URL:[]
	},
	eventsFeed: {
		events: [],
		userHasAuthenticated: false
	}
}

export default function rootReducer(state = INITIAL_STATE, action) {
  return {
    todoList : todoListReducer(state.todoList, action),
    timeTracker : timeTrackerReducer(state.timeTracker, action),
    eventsFeed: eventsFeedReducer(state.eventsFeed, action)
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
    }
}
*/
