export const updateOAuth2Token = (token) => {
  return {
    type: "UPDATE_OAUTH2_TOKEN",
    payload: {
      token: token
    }
  }
}
