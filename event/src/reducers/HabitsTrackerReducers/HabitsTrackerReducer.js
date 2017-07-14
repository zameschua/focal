import AddSiteModalReducer from './AddSiteModalReducer';

const INITIAL_STATE = {
  showAddSiteModal: false,
}

// Combine reducers for todoList
function habitsTrackerReducer(state = INITIAL_STATE, action) {
  return {
    showAddSiteModal: AddSiteModalReducer(state.showAddSiteModal,action),
  }
}

export default habitsTrackerReducer;