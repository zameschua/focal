const authenticationReducer = (state = false, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'UPDATE_USER_AUTHENTICATION_STATUS':
      return action.payload;
    default:
      return state;
  }
}

export default authenticationReducer;