import URL from './URL'
import React from 'react'

const URLlist = ({URLs}) => {
  if (URLs) {
    return (
    	<ul>
	      {URLs.map(tab => (
	        <URL key={tab.id} title={tab.title} time={tab.time} />
	      ))}
    	</ul>
    )
  } else {
  // If there are no tabs to display
    return null;
  }
}

export default URLlist


