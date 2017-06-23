/**
  Handles the state of to-do items
**/
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {id: todo.id, text: todo.text, completed: !todo.completed} // toggle todo as opposite of its current state
          : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo =>
        (todo.id !== action.payload.id)
      )
    default:
      return state
  }
}

export default todos