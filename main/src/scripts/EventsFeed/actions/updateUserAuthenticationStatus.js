export const updateUserAuthenticationStatus = (status) => {
  return {
    type: "UPDATE_USER_AUTHENTICATION_STATUS",
    payload: status,
  }
}
