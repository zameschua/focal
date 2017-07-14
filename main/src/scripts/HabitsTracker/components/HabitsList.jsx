import React, {Component} from 'react';
import {SkyLightStateless} from 'react-skylight';
import {toggleModal} from "../actions/index";
import { connect } from 'react-redux';



class HabitsList extends Component {
	constructor() {
		super();
	}

	render() {

		var styles = {
	    width: '30%',
	    height: '30%',
	    left: '70%',
		};

		return (
		  <div>
		    <ul className="list-group">
				  <li className="list-group-item justify-content-between">
				    Cras justo odio <span className="badge badge-default badge-pill">1 min</span>

				    <button className="btn" type="button" onClick={this.props.toggleModal}>
		          <span className="fa fa-plus"></span>
		        </button>
		        
				  </li>
				  <li className="list-group-item justify-content-between">
				    Dapibus ac facilisis in
				    <button type="button" className="btn"><span className="fa fa-remove"></span></button>
				  </li>
				  <li className="list-group-item justify-content-between">
				    Morbi leo risus
				    
				  </li>
				</ul>
		  </div>
		)
	}
}

const mapStateToProps = state => {
  return {
  	showAddSiteModal: state.habitsTracker.showAddSiteModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(toggleModal());
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsList)

