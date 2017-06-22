import {combineReducers} from 'redux';
import todos from './TodoListReducers/todos'
import visibilityFilter from './TodoListReducers/visibilityFilter'
import tabs from './VisualReducers/tabs'

export default combineReducers({
  todos,
  visibilityFilter,
  tabs
});
