import React from 'react';
import { map } from 'lodash';
import './styles.scss';

const Select = ({ data, value, ...rest }) => {
  return (
    <div className='container-select'>
      <select value={value} {...rest}>
        { map(data, ({ name, id }) => {
          return (
            <option key={id} value={id}>
              { name }
            </option>
          )
        }) }
      </select>
    </div>
  );
};

export default Select;
