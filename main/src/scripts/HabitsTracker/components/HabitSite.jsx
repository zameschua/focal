import React from 'react';


const HabitSite = ({ completed, url, timeSpent, onDelete }) => {
	if (completed) {
		return (<div>
    <li className="list-group-item justify-content-between list-group-item-success" >
      {url} <span className="badge badge-default badge-pill">{Math.floor(timeSpent/60)} min</span>

      <button className="btn" type="button" onClick={onDelete}>
        <span className="fa fa-remove"></span>
      </button>
    </li>
  </div>)
	}
  else {
  	return(<div>
    <li className="list-group-item justify-content-between list-group-item-danger" style={{fontSize:"14px"}}>
      {url} <span className="badge badge-default badge-pill">{Math.floor(timeSpent/60)} min</span>

      <button className="btn" type="button" onClick={onDelete}>
        <span className="fa fa-remove"></span>
      </button>
    </li>
  </div>)
  }
}

export default HabitSite