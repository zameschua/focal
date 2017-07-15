import AddSiteModalReducer from './AddSiteModalReducer';
import AddHabitSitesReducer from './AddHabitSitesReducer';

const INITIAL_STATE = {
  showAddSiteModal: false,
  habitSites: []
}

// Combine reducers for todoList
function habitsTrackerReducer(state = INITIAL_STATE, action) {
  return {
    showAddSiteModal: AddSiteModalReducer(state.showAddSiteModal,action),
    habitSitesReducer: AddHabitSitesReducer
  }
}

export default habitsTrackerReducer;