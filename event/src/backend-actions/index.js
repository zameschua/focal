/**
  Fires off actions to the reducers, informing the reducer of changes to be made
**/

export const addURL = (id, title, time) => {
  return {
    type: 'ADD_URL',
    payload: {
      id: id,
      title: title,
      time: time
    }
  }
}

export const addTime = title => {
  return {
    type: "ADD_TIME",
    payload: {
      title: title,
    }
  }
}

