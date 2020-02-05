import React from 'react';
import cn from 'classnames';
import './styles.scss';

const Button = ({ children, disabled, ...rest }) => {
  return (
    <div className='container-button' {...rest}>
      <button className={cn({ active: !disabled })}>
        { children }
      </button>
    </div>
  );
};

export default Button;
