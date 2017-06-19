import {combineReducers} from 'redux';
import todos from './TodoListReducers/todos'
import visibilityFilter from './TodoListReducers/visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
});
