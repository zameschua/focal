const AddHabitSitesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HABIT_SITE':
      return [
      	...state,
      	{
      		id: action.payload.id,
      		completed: action.payload.completed,
      		url: action.payload.url,
      		atMost: action.payload.atMost,
      		duration: action.payload.duration,
      		timeSpent: 0,
      	}
      ]
    case 'DELETE_HABIT_SITE':
    	return state.filter(site => 
    		(site.id !== action.payload.id)
  		)
  	case 'ADD_HABIT_SITE_TIME':
  		return state.map(site => 
    		(site.url === action.payload.url)
    			? {id: site.id, completed: site.completed, url: site.url, atMost: site.atMost, duration: site.duration, timeSpent: (site.timeSpent + 1)}
    			: site
  		)
  	case 'TOGGLE_COMPLETED':
  		return state.map(site => 
  			(site.url === action.payload.url)
  				? {id: site.id, completed: !site.completed, url: site.url, atMost: site.atMost, duration: site.duration, timeSpent: site.timeSpent}
  				: site
			)
    default:
      return state;
  }
}

export default AddHabitSitesReducer;