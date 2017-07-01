import authenticationReducer from './authenticationReducer';

const INITIAL_STATE = {
	events: [],
	userHasAuthenticated: false
}

// Combine reducers for todoList
function eventsFeedReducer(state = INITIAL_STATE, action) {
  return {
  	userHasAuthenticated: authenticationReducer(state.userHasAuthenticated, action),
    events: state.events // ADD THIS LATER
  }
}

export default eventsFeedReducer;