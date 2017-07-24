import React from 'react';

const ButtonContainer = ({handleClearAllClick, toggleShowAllClick}) => {
  return (
    <div>
    	<button type="button" onClick={handleClearAllClick} className="mdc-button mdc-ripple-upgraded mdc-theme--text-primary-on-dark">Clear all</button>
    	<button onClick={toggleShowAllClick} style={{float:"right"}} className="mdc-button mdc-ripple-upgraded mdc-theme--text-primary-on-dark">Open</button>
    	<p></p>
    </div>

  )
}

export default ButtonContainer;
