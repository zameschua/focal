const tabs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_URL':
      return [
        ...state,
        {
          id: action.payload.id,
          url: action.payload.url
        }
      ]
    default:
      return state;
  }
}

export default tabs;