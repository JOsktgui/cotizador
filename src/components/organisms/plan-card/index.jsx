import React from 'react';
import cn from 'classnames';
import { map, includes } from 'lodash';

import shieldSvg from 'images/shield.svg';
import shield2Svg from 'images/shield2.svg';
import heartEmpty from 'images/heart-empty.svg';
import heartFull from 'images/heart-full.svg';

import './styles.scss';

const data = [
  {
    price: '1MM',
    tag: 'BÁSICO',
    image: shieldSvg,
    covers: [0, 1]
  },
  {
    price: '5MM',
    tag: 'AVANZADO',
    image: shield2Svg,
    covers: [0, 1, 2, 3]
  },
  {
    price: '7MM',
    tag: 'PREMIUM',
    image: shieldSvg,
    covers: [0, 1, 2, 3, 4]
  },
  {
    price: '9MM',
    tag: 'FULL',
    image: shield2Svg,
    covers: [0, 1, 2, 3, 4, 5]
  }
];

const list = [
  { name: 'Lima', description: '(zona de cobertura)' },
  { name: '+30 clínicas', description: '(en red afiliada)' },
  { name: 'Médico a domicilio' },
  { name: 'Chequeos preventivos' },
  { name: 'Reembolso nacional' },
  { name: 'Reembolso internacional' },
];

const PlanCard = ({ planSelected }) => {
  return (
    <div className='container-plan-card'>
      <div className='container-plan-card__header'>
        Cuentas con estos beneficios
      </div>

      <div className='container-plan-card__body'>
        <div className='container-plan-card__body-header'>
          <div>
            <span>Cobertura máxima</span>
            <div className='quantity'>
              S/ { data[planSelected].price }
            </div>
            <span className='tag'>
              <span>PLAN</span> { data[planSelected].tag }
            </span>
          </div>

          <div className='image'>
            <div className='divider'/>
            <img src={data[planSelected].image} alt='shield' />
          </div>
        </div>

        <div className='container-plan-card__body-list'>
          { map(list, ({ name, description }, index) => {
            return (
              <div
                className={cn({ inactive: !includes(data[planSelected].covers, index) })}
                key={index}
              >
                <img
                  src={includes(data[planSelected].covers, index) ? heartFull : heartEmpty}
                  alt='heart-full'
                />
                <div className='item-name'>
                  { name }  { description && <span>{ description }</span> }
                </div>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
