import React from 'react';

const URLLine = ({ title, time, totalTime }) => (

  <li className="list-group-item text-white" style={{fontSize: "17px",background:"none"}}>
  	<div>
			<b>{title}</b>: <b>{Math.round(time/60)}</b>min <b>{time%60}</b>s
		</div>
  </li>
)

export default URLLine