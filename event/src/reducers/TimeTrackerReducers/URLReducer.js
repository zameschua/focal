const URLReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_URL':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          time: action.payload.time
        }
      ]
    case 'ADD_TIME':
    	return state.map(url => 
    		(url.title === action.payload.title)
    			? {id: url.id, title: url.title, time: (url.time + 1)}
    			: url
  		)
    case 'CLEAR_ALL_TAB_INFO':
      console.log("HIGT");
      return []
    default:
      return state;
  }
}

export default URLReducer;