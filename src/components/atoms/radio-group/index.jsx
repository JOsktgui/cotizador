import React from 'react';
import { map } from 'lodash';
import './styles.scss';

const RadioGroup = ({ title, data, onChange }) => {

  return (
    <div className='container-radio-group'>
      <span className='container-radio-group__title'>
        { title }
      </span>

      <form>
        { map(data, ({ name, id }) => {
          return (
            <div key={id} className='container-radio-group__item'>
              <input
                onChange={({ target }) => onChange(target.value)}
                type='radio'
                name={title}
                value={id}
                id={id}
              />
              <label className='container-radio-group__label' htmlFor={id}>
                <span />
                { name }
              </label>
            </div>
          )
        }) }
      </form>
    </div>
  );
};

export default RadioGroup;
