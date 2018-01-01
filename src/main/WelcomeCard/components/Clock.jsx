import React from 'react';


const Clock = ({hours, minutes}) => {
	let renderHours = `${hours}`;
	let renderMinutes = `${minutes}`;

	if (minutes <= 9) {
		renderMinutes = `0${renderMinutes}`;
	}
	if (hours <= 9) {
		renderHours = `0${renderHours}`;
	}

  return (
    <h1 style={{color:"white",fontSize:"140px"}}>{renderHours}:{renderMinutes}</h1>
  )
}

export default Clock;
