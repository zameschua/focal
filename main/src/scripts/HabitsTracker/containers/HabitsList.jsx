import React from 'react';
import {deleteHabitSite} from "../actions/index";
import { connect } from 'react-redux';
import HabitSite from "../components/HabitSite";

const HabitsList = ({ habitSites, deleteHabitSite }) => {
  if (habitSites) {
    return (<ul className="list-group">
        {habitSites.map(site => (
        <HabitSite key={site.id} completed={site.completed} url={site.url} timeSpent={site.timeSpent} onDelete={() => deleteHabitSite(site.id)} />
      ))}
    </ul>)
  } else {
  // If there are no todos to display
    return null;
  }
}

const mapStateToProps = state => {
	if (state.habitsTracker) {
		return {
  		habitSites: state.habitsTracker.habitSites
  	}
	}
	else {
		return {
  		habitSites: []
  	}		
	}
  
}

const mapDispatchToProps = dispatch => {
  return {
    deleteHabitSite: (id) => {
      dispatch(deleteHabitSite(id));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsList)

