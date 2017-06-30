import React from 'react';


const ButtonContainer = ({handleClearAllClick, toggleShowAllClick}) => {


  return (
    <div>
    	<button type="button" onClick={handleClearAllClick} className="btn btn-primary">Clear all</button>
    	<button onClick={toggleShowAllClick} style={{float:"right"}} className="btn btn-primary">Open</button>
    	
    </div>

  )
}

export default ButtonContainer