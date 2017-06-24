import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }  from 'react-redux';
import WelcomeMessage from '../components/WelcomeMessage';
import Clock from '../components/Clock'

class WelcomeCard extends Component {
  constructor() {
    super();
    let now = new Date();
    this.state = {
      minutes: now.getHours(),
      hours: now.getMinutes()
    }
  }

  componentDidMount() {
    this.initClock();
  }

  updateClock() {
    let now = new Date();
    this.setState({
      hours: now.getHours(),
      minutes: now.getMinutes()
    });
  }
  
  initClock() {
    this.updateClock();
    window.setInterval(this.updateClock.bind(this), 1000);
  }

  render() {
    return (
      <div>
        { /* TODO: GET NAME FROM STORE */ }
  		  <WelcomeMessage userName="Chen Kuang"/>
  		  <Clock hours={this.state.hours} minutes={this.state.minutes}/>
      </div>
    );
  }
}

export default WelcomeCard;
