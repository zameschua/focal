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

export const updateUserAuthenticationStatus = (status) => {
  return {
    type: "UPDATE_USER_AUTHENTICATION_STATUS",
    payload: status
  }
}

export const getCalendarEventsSuccess = (payload) => {
  return {
    type: "GET_CALENDAR_EVENTS_SUCCESS",
    payload
  }
}

export const getCalendarEvents = () => {
  return {
    type: "GET_CALENDAR_EVENTS",
    async: true
  }
}
