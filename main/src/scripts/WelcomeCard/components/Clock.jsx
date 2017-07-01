import React from 'react';


const Clock = ({hours, minutes}) => {
	if (minutes > 9) {
		return (
			<h1 style={{color:"white",fontSize:"108px",fontFamily:"Segoe UI",fontWeight:"200"}}>{hours}:{minutes}</h1>	
		)
	}
	else {
	  return (
	    <h1 style={{color:"white",fontSize:"108px"}}>{hours}:0{minutes}</h1>
	  )		
	}

}

export default Clock;