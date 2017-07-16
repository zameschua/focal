import AddSiteModalReducer from './AddSiteModalReducer';
import AddHabitSitesReducer from './AddHabitSitesReducer';
import ShowStatsModalReducer from './ShowStatsModalReducer';

const INITIAL_STATE = {
  showAddSiteModal: false,
  showStatsModal: false,
  habitSites: [],
  pastRecords: []
}

// Combine reducers for todoList
function habitsTrackerReducer(state = INITIAL_STATE, action) {
  return {
    showAddSiteModal: AddSiteModalReducer(state.showAddSiteModal,action),
    showStatsModal: ShowStatsModalReducer(state.showStatsModal,action),
    habitSites: AddHabitSitesReducer(state.habitSites,action),
  }
}

export default habitsTrackerReducer;