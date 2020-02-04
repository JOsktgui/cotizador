import React from 'react';
import './styles.scss';

const Checkbox = ({ children, id = 'accept' }) => {
  return (
    <div className='container-checkbox'>
      <input type='checkbox' id={id} name={id} />
      <label htmlFor={id} className='container-checkbox__label'>
        <span />
        { children }
      </label>
    </div>
  );
};

export default Checkbox;
