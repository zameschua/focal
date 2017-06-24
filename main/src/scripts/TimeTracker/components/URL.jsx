import React from 'react'
import PropTypes from 'prop-types'

const URL = ({ title, time}) => (
		<div>
			<label>
  			{title} : {time}
  		</label>
  	</div>
)

/**
  Used to validate the obj-type for the props passed in.
  "isRequired" used to make sure a warning is shown if the prop isn't provided
**/
URL.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
}


export default URL


