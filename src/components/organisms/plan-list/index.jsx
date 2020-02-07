import React from 'react';
import cn from 'classnames';
import { map } from 'lodash';

import check from 'images/gl_correct.svg';

import './styles.scss';

const data = [
  { plan: 'BÁSICO', price: '160', type: 'mensual' },
  { plan: 'AVANZADO', price: '200', type: 'mensual' },
  { plan: 'PREMIUM', price: '250', type: 'mensual' },
  { plan: 'FULL', price: '500', type: 'mensual' },
];

const PlanList = ({ planSelected, onChange }) => {
  return (
    <div className='container-carousel-plans'>
      <div className='carousel-plans'>
        { map(data, ({ plan, price, type }, index) => {
          return (
            <div
              className={cn('carousel-plans__item', { active: index === planSelected })}
              onClick={() => onChange(index)}
              key={index}
            >
              <span className='carousel-plans__item-check'>
                { index === planSelected && <img src={check} alt='check' /> }
              </span>

              <span className='carousel-plans__item-tag'>{ plan }</span>
              <div className='carousel-plans__item-body'>
                <div className='carousel-plans__item-number'>
                  <span>S/</span> { price }
                </div>
                <span>{ type }</span>
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  );
};

export default PlanList;
