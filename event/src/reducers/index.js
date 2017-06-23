import tabs from './VisualReducers/tabs'
import todoListReducer from './TodoListReducers/todoListReducer';

const INITIAL_STATE = {
	todoList: {
	  todos: [],
	  visibilityFilter: "SHOW_ALL"
	},
	visualisation: []
}

export default function rootReducer(state = INITIAL_STATE, action) {
  return {
    todoList : todoListReducer(state.todoList, action),
    visualisation : tabs(state.visualisation, action)
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
	visualisation: {
	}
}
*/
