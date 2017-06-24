import React from 'react';

const Clock = ({hours, minutes}) => {
  return (
    <h1 style={{color:"white"}}>{hours}:{minutes}</h1>
  )
}

export default Clock;