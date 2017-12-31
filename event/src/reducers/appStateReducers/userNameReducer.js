const userNameReducer = (state = "", action) => {
  switch (action.type) {
    case 'UPDATE_USER_NAME':
      return action.payload;
    default:
      return state;
  }
};

export default userNameReducer;
