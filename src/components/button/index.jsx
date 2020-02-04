import React from 'react';
import cn from 'classnames';
import './styles.scss';

const Button = ({ children, disabled }) => {
  return (
    <div className='container-button'>
      <button className={cn({ active: !disabled })}>
        { children }
      </button>
    </div>
  );
};

export default Button;
