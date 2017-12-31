import AddSiteModalReducer from './AddSiteModalReducer';
import AddHabitSitesReducer from './AddHabitSitesReducer';
import ShowStatsModalReducer from './ShowStatsModalReducer';
import AddPastRecordsReducer from './AddPastRecordsReducer';

const INITIAL_STATE = {
  showAddSiteModal: false,
  showStatsModal: false,
  habitSites: [],
  pastRecords: []
};

// Combine reducers for todoList
function habitsTrackerReducer(state = INITIAL_STATE, action) {
  return {
    showAddSiteModal: AddSiteModalReducer(state.showAddSiteModal, action),
    showStatsModal: ShowStatsModalReducer(state.showStatsModal, action),
    habitSites: AddHabitSitesReducer(state.habitSites, action),
    pastRecords: AddPastRecordsReducer(state.pastRecords, action)
  };
}

export default habitsTrackerReducer;
