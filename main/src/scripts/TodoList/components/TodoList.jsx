import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


/**
  To-do list component

  todos => Array of to-do components
  onTodoClick => function performed when component is clicked

  *Note*: ... is a spread attribute
          {...todo} = id={todo.id} completed={todo.completed} text={todo.text}
**/
const TodoList = ({ todos, onTodoClick, onTodoDelete }) => {
  if (todos) {
    return (<ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} onDelete={() => onTodoDelete(todo.id)} />
      ))}
    </ul>)
  } else {
  // If there are no todos to display
    return null;
  }
}

/**
  Used to validate the obj-type for the props passed in.
  "isRequired" used to make sure a warning is shown if the prop isn't provided
**/
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList