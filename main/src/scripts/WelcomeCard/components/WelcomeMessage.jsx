import React from 'react';

const WelcomeMessage = ({userName}) => {
  return (
    <h1 style={{color:"white", fontSize:"80px"}}>Hello, {userName}</h1>
  )
}

export default WelcomeMessage;