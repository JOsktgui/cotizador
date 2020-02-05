import React from 'react';

import shieldSvg from 'images/shield.svg';
import heartEmpty from 'images/heart-empty.svg';
import heartFull from 'images/heart-full.svg';

import './styles.scss';

const PlanCard = () => {
  return (
    <div className='container-plan-card'>
      <div className='container-plan-card__header'>
        Cuentas con estos beneficios
      </div>

      <div className='container-plan-card__body'>
        <div className='container-plan-card__body-header'>
          <div>
            <span>Cobertura máxima</span>
            <div className='quantity'>S/1MM</div>
            <span className='tag'>
              BÁSICO
            </span>
          </div>

          <div className='image'>
            <div className='divider'/>
            <img src={shieldSvg} alt='shield' />
          </div>
        </div>

        <div className='container-plan-card__body-list'>
          <div>
            <img src={heartFull} alt='heart-full' />
            <div className='item-name'>
              Lima <span>(zona de cobertura)</span>
            </div>
          </div>

          <div>
            <img src={heartFull} alt='heart-full' />
            <div className='item-name'>
              +30 clínicas <span>(en red afiliada)</span>
            </div>
          </div>

          <div className='inactive'>
            <img src={heartEmpty} alt='heart-empty ' />
            <div className='item-name'>
              Médico a domicilio
            </div>
          </div>

          <div className='inactive'>
            <img src={heartEmpty} alt='heart-empty ' />
            <div className='item-name'>
              Chequeos preventivos
            </div>
          </div>

          <div className='inactive'>
            <img src={heartEmpty} alt='heart-empty ' />
            <div className='item-name'>
              Reembolso nacional
            </div>
          </div>

          <div className='inactive'>
            <img src={heartEmpty} alt='heart-empty ' />
            <div className='item-name'>
              Reembolso internacional
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlanCard;
