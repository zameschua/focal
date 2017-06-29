import React from 'react';
import {Doughnut} from 'react-chartjs-2';

// function that generates a random color string
const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// returns an array of color codes that corresponds to the number of websites visited
const getBackgroundColors = (items) => {
  let arr = [];
  for (let i=0;i<items;i++) {
    arr.push(getRandomColor());
  }
  return arr;
}

const getBorderColor = (items) => {
  let arr = [];
  for (let i=0;i<items;i++) {
    arr.push('rgba(255, 255, 255, 0.4)');
  }
  return arr;  
}

const URLlist = ({URLs, handleClick}) => {
  var data = {
    labels: URLs.map(url => url.title),
    datasets: [{
      data: URLs.map(url => url.time),
      backgroundColor: getBackgroundColors(URLs.length),
      borderColor: getBorderColor(URLs.length)
    }]    
  };

  var options = {
    legend: {
      display: false
    }
  }

  if (URLs) {
    return (
      <div>
        <Doughnut
          data={data}
          options={options}
          />
        <button type="button" onClick={handleClick} className="btn btn-primary">Clear all</button>
      </div>

    )
  } else {
  // If there are no tabs to display
    return null;
  }
}

export default URLlist


