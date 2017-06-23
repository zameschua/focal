import todos from './todos'
import visibilityFilter from './visibilityFilter'

const INITIAL_STATE = {
	todos: [],
	visibilityFilter: "SHOW_ALL"
}

// Combine reducers for todoList
function todoListReducer(state = INITIAL_STATE, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}

export default todoListReducer;