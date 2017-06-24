/**
  Fires off actions to the reducers, informing the reducer of changes to be made
**/

export const clearAllTabInfo = url => {
  return {
    type: 'CLEAR_ALL_TAB_INFO',
    payload: {}
  }
}
