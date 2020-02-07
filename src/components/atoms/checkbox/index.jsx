import React from 'react';
import './styles.scss';

const Checkbox = ({ children, id = 'accept', ...rest }) => {
  return (
    <div className='container-checkbox'>
      <input
        type='checkbox'
        id={id}
        name={id}
        {...rest}
      />
      <label htmlFor={id} className='container-checkbox__label'>
        <span />
        { children }
      </label>
    </div>
  );
};

export default Checkbox;
