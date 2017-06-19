import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Click Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("stateInPopup: " + state);
  return {
    count: state.visibilityFilter
  };
};

export default connect(mapStateToProps)(App);
