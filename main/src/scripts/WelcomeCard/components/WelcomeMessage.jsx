import React from 'react';

const WelcomeMessage = ({userName}) => {
  return (
    <h1 style={{color:"white"}}>Hello, {userName}</h1>
  )
}

export default WelcomeMessage;