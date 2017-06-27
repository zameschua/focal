import tokenReducer from './tokenReducer'

const INITIAL_STATE = {
	events: [],
	token: {
		oAuth2Token: "",
		userHasAuthenticated: false
	}
}

// Combine reducers for todoList
function eventsFeedReducer(state = INITIAL_STATE, action) {
  console.log(state);
  return {
  	token: tokenReducer(state.token, action),
    events: state.events // ADD THIS LATER
  }
}

export default eventsFeedReducer;