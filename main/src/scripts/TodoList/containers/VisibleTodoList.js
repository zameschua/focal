import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

/**
  mapStateToProps and mapDispatchToProps provides TodoList with the store's state and dispatches
  as props
**/

// function that filters out the to-do items that are supposed to be shown
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

// upon click, dispatch "toggleTodo" action to store
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onTodoDelete: id => {
      dispatch(deleteTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList