import React from 'react';

const URLLine = ({ title, time, totalTime }) => (

  <div className="text-white" style={{fontSize: "17px"}}>
  	<label style={{fontWeight: "bold"}}>{title}:</label> 
  	<label style={{fontWeight: "bold"}}>{Math.round(time/60)}</label>min <label style={{fontWeight: "bold"}}>{time%60}</label>s<br/>
  </div>
)

export default URLLine