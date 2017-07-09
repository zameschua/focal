import React from 'react';

const DateCard = ({date, month, day}) => {
	return (<div className="container">
		<div className="row mdc-typography--title">
			{date + " " + month}
		</div>
		<div className="row mdc-typography--body1">
			{day}
		</div>
	</div>);
}

export default DateCard;