import React from 'react';

import './Button.scss';

const Button = ({ label, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className='Button'
      style={style}
    >{label}</button>
  )
}

export default Button;
