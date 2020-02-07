import React from 'react';
import cn from 'classnames';
import './styles.scss';

const Input = ({
  type = 'text',
  placeholder = '',
  showError,
  messageError,
  ...rest
}) => {
  return (
    <div className={cn('container-input', { error: showError })}>
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
      />

      <span>
        { messageError }
      </span>
    </div>
  );
};

export default Input;
