const tabs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_URL':
      return [
        ...state,
        {
          id: action.id,
          url: action.url
        }
      ]
    default:
      return state
  }
}

export default tabs