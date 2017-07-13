const sidePanelsReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_SIDE_PANELS':
      return true;
    case 'HIDE_SIDE_PANELS':
      return false;
    default:
      return state;
  }
}

export default sidePanelsReducer;