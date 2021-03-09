import React from 'react';

import './Button.scss';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='Button'
    >{label}</button>
  )
}

export default Button;
