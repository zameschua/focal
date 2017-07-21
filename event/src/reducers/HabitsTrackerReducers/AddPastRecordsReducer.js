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

      else if (state.filter(record => 
        {return record.date[record.date.indexOf('/') + 1]+record.date[record.date.lastIndexOf('/') - 1] 
          === action.payload.date[action.payload.date.indexOf('/') + 1]+action.payload.date[action.payload.date.lastIndexOf('/') - 1] 
      }).length !== 0) {
        // case where record for the day already exists.
        // this only happens when a record is to be updated.
        // remove the most recent record.
        // push to back of list
        state.pop();
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
      };
    case "UPDATE_DAILY_RECORD_ADD":
      if (action.payload.atMost) {
        return state.map(record => 
          (record.date === action.payload.date) 
            ? {date: record.date, completed: record.completed+1, incomplete: record.incomplete}
            : record
        )
      }
      else {
        return state.map(record => 
          (record.date === action.payload.date) 
            ? {date: record.date, completed: record.completed, incomplete: record.incomplete+1}
            : record
        )        
      }
    case "UPDATE_DAILY_RECORD_MINUS":
      if (action.payload.completed) {
        return state.map(record => 
          (record.date === action.payload.date) 
            ? {date: record.date, completed: record.completed-1, incomplete: record.incomplete}
            : record
        )
      }
      else {
        return state.map(record => 
          (record.date === action.payload.date) 
            ? {date: record.date, completed: record.completed, incomplete: record.incomplete-1}
            : record
        )
      }
    default:
      return state;
  }
}

export default AddPastRecordsReducer;