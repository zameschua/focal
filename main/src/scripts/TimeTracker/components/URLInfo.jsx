import React from 'react';
import URLLine from './URLLine';
import { connect } from 'react-redux';

import ReactScrollbar from 'react-scrollbar-js';


//compare by descending order
function compare(url1, url2) {
  if (url1.time < url2.time) 
    return 1;
  else if (url1.time > url2.time)
    return -1;
  else
    return 0;
}

const myScrollbar = {
  height: 350,
  width: "100%"
};

var URLInfo = ({URLs}) => {
  var totalTimeSpent = 0;
  var sortedURLs = URLs.sort(compare);

  for (let i=0;i<URLs.length;i++) {
    totalTimeSpent += URLs[i].time;
  }


  if (URLs) {
    return (
      <ReactScrollbar style={myScrollbar}>
        <p></p>
        <ul className="list-group">
          {sortedURLs.map(url => (
            <URLLine key={url.id} title={url.title} time={url.time} totalTime={Math.round(url.time*100/totalTimeSpent)} />
          ))}
        </ul>
      </ReactScrollbar>

    )
  } else {
  // If there are no tabs to display
    return null;
  }
}

const mapStateToProps = state => {
  if (state.timeTracker) {
    return {
      URLs: state.timeTracker.URL
    }
  }
  else {
    return {
      URLs: []
    }
  }

}

URLInfo = connect(mapStateToProps)(URLInfo)

export default URLInfo


