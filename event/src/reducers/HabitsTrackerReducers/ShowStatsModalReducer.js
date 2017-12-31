const ShowStatsModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_STATS_MODAL':
      return !state;
    default:
      return state;
  }
};

export default ShowStatsModalReducer;
