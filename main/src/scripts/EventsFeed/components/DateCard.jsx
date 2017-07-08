import React from 'react';

const monthsArray = [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const DateCard = ({date, month}) => {
	return (<div className="container">
		<div className="row">
			{date}
		</div>
		<div className="row">
			{monthsArray[month]}
		</div>
	</div>);
}

export default DateCard;