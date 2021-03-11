import React from 'react';

import './CircularButton.scss';

const CircularButton = ({ label, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className='CircularButton'
      style={style}
    >{label}</button>
  )
}

export default CircularButton;
