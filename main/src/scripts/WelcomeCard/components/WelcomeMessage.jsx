import React from 'react';

const WelcomeMessage = ({userName}) => {
  return (
    <label style={{color:"white",fontSize:"50px",fontFamily:"Segoe UI"}}>Hello, {userName}</label>
  )
}

export default WelcomeMessage;