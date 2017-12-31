const userAuthenticationReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_USER_AUTHENTICATION_STATUS':
      return action.payload;
    default:
      return state;
  }
};

export default userAuthenticationReducer;
