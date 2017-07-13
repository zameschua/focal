import sidePanelsReducer from './sidePanelsReducer';
import userNameReducer from './userNameReducer';

const INITIAL_STATE = {
	sidePanelsVisible: false,
	userName: "",
}

// Combine reducers for todoList
function appStateReducer(state = INITIAL_STATE, action) {
  return {
  	sidePanelsVisible: sidePanelsReducer(state.sidePanelsVisible, action),
    userName: userNameReducer(state.userName, action) // ADD THIS LATER
  }
}

export default appStateReducer;