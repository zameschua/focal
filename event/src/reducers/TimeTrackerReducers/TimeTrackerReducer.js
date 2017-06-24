import URLReducer from './URLReducer';

const INITIAL_STATE = {
  URL: []
}

// Combine reducers for todoList
function TimeTrackerReducer(state = INITIAL_STATE, action) {
  return {
    URL: URLReducer(state.URL,action)
  }
}

export default TimeTrackerReducer;