import React, {Component} from 'react';
import {SkyLightStateless} from 'react-skylight';
import {toggleModal, addHabitSite, toggleStatsModal} from "../actions/index";
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {approximateColor1ToColor2ByPercent, getRecordsModifiersStyles, getRecordsModifier} from "../helpers/index";


class HabitsTrackerHeader extends Component {
	constructor() {
		super();
		this.state = {webUrl: "", choice:0, duration:0, selectedDay: null, selectedCompleted: 0, selectedIncomplete: 0};


		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChoiceChange = this.handleChoiceChange.bind(this);
		this.handleWebUrlChange = this.handleWebUrlChange.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
		this.handleDayClick = this.handleDayClick.bind(this);
	};

	handleSubmit(event) {
		let atMost = (this.state.choice == 0);
		this.props.addHabitSite(this.state.webUrl, atMost, this.state.duration);
		this.props.toggleModal();
		event.preventDefault();
	};

	handleChoiceChange(event) {
		this.setState({choice: event.target.value});
	};

	handleWebUrlChange(event) {
		this.setState({webUrl: event.target.value});
	};

	handleDurationChange(event) {
		this.setState({duration: parseInt(event.target.value)});
	};

  handleDayClick(day) {
  	this.setState({
  		selectedDay: day,
  		selectedCompleted: 0,
  		selectedIncomplete: 0
  	});
    this.props.pastRecords.forEach(record => {
    	if (record.date.getFullYear() === day.getFullYear() && record.date.getMonth() === day.getMonth() && record.date.getDate() === day.getDate()) {
    		this.setState({
    			selectedCompleted: record.completed,
    			selectedIncomplete: record.incomplete
    		})
    	}
    });
  };

	render() {


		return (
		  <div>
	     	<button className="btn" type="button" onClick={this.props.toggleModal}>
          <span className="fa fa-plus"></span>
        </button>
        <button className="btn" type="button" style={{float:"right"}} onClick={this.props.toggleStatsModal}>
        	<span className="fa fa-calendar"></span>
        </button>

      	{/* MODAL FOR ADDING OF NEW SITE TO TRACK */}
				<SkyLightStateless
          isVisible={this.props.showAddSiteModal}
          onCloseClicked={this.props.toggleModal}
          onOverlayClicked={this.props.toggleModal}
          title="Add a new goal!"
        >	
        	<form onSubmit={this.handleSubmit}>
	          <div className="form-group">
	          	<label>Website address (a website that starts with "http://" or "https://")</label>
	          	<input type="url" className="form-control" onChange={this.handleWebUrlChange} placeholder="http://www.example.com" required pattern="https?://.+"/>
	          </div>
	          <div className="form-group">
	          	<label>This website is to be visited daily for: </label>
	          	<select value={this.state.choice} className="form-control" onChange={this.handleChoiceChange}>
	          		<option value="0">at most</option>
	          		<option value="1">at least</option>
	          	</select>
	          </div>
	          <div className="form-group">
	          	<label>Duration (in minutes)</label>
	          	<input type="number" className="form-control" onChange={this.handleDurationChange} placeholder="15" required/>
	          </div>
	          <button type="submit" className="btn btn-primary">Submit</button>	
	        </form>
	        
        </SkyLightStateless>

      	{/* MODAL FOR DISPLAYING OF STATISTICS */}
				<SkyLightStateless
          isVisible={this.props.showStatsModal}
          onCloseClicked={this.props.toggleStatsModal}
          onOverlayClicked={this.props.toggleStatsModal}
          title="Your progress for the past 42 days"
        >	
        	<div className="text-center">
  		      <DayPicker 
  		      	fixedWeeks 
  		      	canChangeMonth={false}
  		      	modifiers={getRecordsModifier(this.props.pastRecords)}
  		      	modifiersStyles={getRecordsModifiersStyles(this.props.pastRecords)} 
  		      	onDayClick={this.handleDayClick}
			      />
        		{this.state.selectedDay 
      				? (<p>On <strong>{this.state.selectedDay.toLocaleDateString()}</strong>,
      						you fulfilled <label style={{fontWeight: "bold", color: "green"}}>{this.state.selectedCompleted}</label> habits and
      						failed to fulfill <label style={{fontWeight: "bold", color: "red"}}>{this.state.selectedIncomplete}</label> habits.</p>)
      				: (<p>Nothing selected</p>)}			            
        	</div>
        </SkyLightStateless>

		  </div>
		)
	}
}

var mockRecords = [
	{
		date: new Date(2017, 6, 17),
		completed: 5,
		incomplete: 10
	},
	{
		date: new Date(2017, 6, 18),
		completed: 5,
		incomplete: 2
	},	
]

const mapStateToProps = state => {
  return {
  	showAddSiteModal: state.habitsTracker.showAddSiteModal,
  	showStatsModal: state.habitsTracker.showStatsModal,
  	pastRecords: mockRecords,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(toggleModal());
    },
    toggleStatsModal: () => {
    	dispatch(toggleStatsModal());
    },
    addHabitSite: (url, atMost, duration) => {
    	dispatch(addHabitSite(url,atMost,duration));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsTrackerHeader)
