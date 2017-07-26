import moment from 'moment';

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

      else if (state.filter(record => {return new moment(record.date).get('date') === new moment(action.payload.date).get('date')}).length !== 0) {
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
          (record.date.get('date') === new moment(action.payload.date).get('date')) 
            ? {date: record.date, completed: record.completed+1, incomplete: record.incomplete}
            : record
        )
      }
      else {
        return state.map(record => 
          (record.date.get('date') === new moment(action.payload.date).get('date')) 
            ? {date: record.date, completed: record.completed, incomplete: record.incomplete+1}
            : record
        )        
      }
    case "UPDATE_DAILY_RECORD_MINUS":
      if (action.payload.completed) {
        return state.map(record => 
          (record.date.get('date') === new moment(action.payload.date).get('date')) 
            ? {date: record.date, completed: record.completed-1, incomplete: record.incomplete}
            : record
        )
      }
      else {
        return state.map(record => 
          (record.date.get('date') === new moment(action.payload.date).get('date')) 
            ? {date: record.date, completed: record.completed, incomplete: record.incomplete-1}
            : record
        )
      }
    default:
      return state;
  }
}

export default AddPastRecordsReducer;