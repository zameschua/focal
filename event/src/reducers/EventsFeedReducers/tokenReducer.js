const INITIAL_STATE = {
	oAuth2Token: "",
	userHasAuthenticated: false
}

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_OAUTH2_TOKEN':
      return {
      	oAuth2Token: action.payload.token,
      	userHasAuthenticated: true
      }
    default:
      return state;
  }
}

export default tokenReducer;