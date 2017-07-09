import authenticationReducer from './authenticationReducer';
import eventsReducer from './eventsReducer';

const INITIAL_STATE = {
	events: [],
	userHasAuthenticated: false
}

// Combine reducers for todoList
function eventsFeedReducer(state = INITIAL_STATE, action) {
  return {
  	userHasAuthenticated: authenticationReducer(state.userHasAuthenticated, action),
    events: eventsReducer(state.events, action) // ADD THIS LATER
  }
}

export default eventsFeedReducer;