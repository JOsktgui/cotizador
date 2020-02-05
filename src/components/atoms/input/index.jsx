import React from 'react';
import './styles.scss';

const Input = ({
  type = 'text',
  placeholder = ''
}) => {
  return (
    <div className='container-input'>
      <input
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
