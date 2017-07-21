import React from 'react';

const URLLine = ({ title, time, totalTime }) => (

  <li className="list-group-item mdc-theme--text-secondary-on-dark" style={{background: "none"}}>
  	<div>
			<b>{title}</b>: <b>{Math.round(time/60)}</b>min <b>{time%60}</b>s
		</div>
  </li>
)

export default URLLine