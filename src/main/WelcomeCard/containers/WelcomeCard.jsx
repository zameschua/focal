import React, { Component } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import Clock from '../components/Clock';

class WelcomeCard extends Component {
  constructor() {
    super();
    const now = new Date();
    this.state = {
      minutes: now.getHours(),
      hours: now.getMinutes(),
    };
  }

  componentDidMount() {
    this.initClock();
  }

  updateClock() {
    const now = new Date();
    this.setState({
      hours: now.getHours(),
      minutes: now.getMinutes(),
    });
  }

  initClock() {
    this.updateClock();
    window.setInterval(this.updateClock.bind(this), 1000);
  }

  render() {
    return (
      <div>
        <Clock hours={this.state.hours} minutes={this.state.minutes} />
        <WelcomeMessage userName={this.props.userName} />
      </div>
    );
  }
}

export default WelcomeCard;
