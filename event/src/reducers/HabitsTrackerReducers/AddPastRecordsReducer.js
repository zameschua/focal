const AddPastRecordsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DAILY_RECORD':
      if (state.length == 42) {
        // case where list has 42 elements
        // remove earliest item at index 0
        // push to back of list
        state.shift();
        state.push({
          date: action.payload.date,
          completed: action.payload.completed,
          incomplete: action.payload.incomplete,
        });
        return state;
      }
      else {
        return [
        ...state,
          {
            date: action.payload.date,
            completed: action.payload.completed,
            incomplete: action.payload.incomplete,
          }
        ]
      }

    default:
      return state;
  }
}

export default AddPastRecordsReducer;