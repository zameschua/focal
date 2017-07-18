import React from 'react';

const DateCard = ({date, month, day}) => {
	return (<div className="container">
		<div className="row mdc-typography--title text-white">
			{date + " " + month}
		</div>
		<div className="row mdc-typography--body1 text-white">
			{day}
		</div>
	</div>);
}

export default DateCard;