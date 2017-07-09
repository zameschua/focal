const sidePanelsReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_PANELS_VISIBILITY':
      return !state;
    default:
      return state;
  }
}

export default sidePanelsReducer;