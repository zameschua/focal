import React from 'react';

const DateCard = ({date, month, day}) => {
	return (<div className="container" style={{paddingTop: "3vh"}}>
		<div className="row mdc-typography--title mdc-theme--text-primary-on-dark" style={{textShadow: "1px 1px 0.5px #777"}}>
			{date + " " + month}
		</div>
		<div className="row mdc-typography--body1 mdc-theme--text-secondary-on-dark" style={{textShadow: "1px 1px 0.5px #777"}}>
			{day}
		</div>
	</div>);
}

export default DateCard;