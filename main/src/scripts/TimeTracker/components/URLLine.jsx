import React from 'react';

const URLLine = ({ title, time, totalTime }) => (

  <div>
  	Site: <label style={{fontWeight: "bold"}}>{title} </label><br/>
  	time spent: <label style={{fontWeight: "bold"}}>{Math.round(time/60)}</label>min <label style={{fontWeight: "bold"}}>{time%60}</label>s<br/>
    percentage: <label style={{fontWeight: "bold"}}>{totalTime} </label>%<br/>
  </div>
)

export default URLLine