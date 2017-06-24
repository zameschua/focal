import todoListReducer from './TodoListReducers/todoListReducer';
import TimeTrackerReducer from './TimeTrackerReducers/TimeTrackerReducer';

const INITIAL_STATE = {
	todoList: {
	  todos: [],
	  visibilityFilter: "SHOW_ALL"
	},
	TimeTracker: {
		URL:[]
	}
}

export default function rootReducer(state = INITIAL_STATE, action) {
  return {
    todoList : todoListReducer(state.todoList, action),
    TimeTracker : TimeTrackerReducer(state.TimeTracker, action)
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
	TimeTracker: {
		URL: []
	}
}
*/
