import React from 'react';


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

export default Todo