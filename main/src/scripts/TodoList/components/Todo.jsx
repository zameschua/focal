import React from 'react'
import PropTypes from 'prop-types'

/**
  Individual to-do component

  onClick => function performed once a user clicks this component
  completed => boolean to state if task is done
  text => String that describes the task
**/
const Todo = ({ onClick, completed, text, onDelete }) => (
  <div >
    <input onClick = {onClick} checked={completed} type="checkbox" />
    <label
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text} 
    </label>
    <button className="btn" onClick={onDelete}>X</button>
  </div>
)


/**
  Used to validate the obj-type for the props passed in.
  "isRequired" used to make sure a warning is shown if the prop isn't provided
**/
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo