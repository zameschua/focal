const INITIAL_STATE = [];

const eventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CALENDAR_EVENTS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

export default eventsReducer;
