export const getCalendarEvents = () => ({
  type: 'GET_CALENDAR_EVENTS',
  async: true,
});

export const updateUserAuthenticationStatus = status => ({
  type: 'UPDATE_USER_AUTHENTICATION_STATUS',
  payload: status,
});
