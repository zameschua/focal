import eventsReducer from './eventsReducer';

const INITIAL_STATE = {
  events: [],
};

// Combine reducers for todoList
function eventsFeedReducer(state = INITIAL_STATE, action) {
  return {
    events: eventsReducer(state.events, action),
  };
}

export default eventsFeedReducer;
