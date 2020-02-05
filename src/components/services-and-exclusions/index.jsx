import React from 'react';

import chevrotSvg from 'images/chevrot.svg';
import personPlanSvg from 'images/person-plan.svg';

import './styles.scss';

const ServicesAndExclusions = () => {
  return (
    <div className='container-services-exclusions'>
      <div className='container-services-exclusions__header'>
        <div>
          Revisa nuestros <br /><span>servicios y exclusiones</span>
        </div>
        <img src={personPlanSvg} alt='person-plan' />
      </div>
      <div className='container-services-exclusions__body'>
        <div className='container-services-exclusions__item'>
          <div className='container-services-exclusions__item-header'>
            <span>Servicios brindados</span>
            <img src={chevrotSvg} alt='chevrot' />
          </div>
        </div>
        <div className='container-services-exclusions__item'>
          <div className='container-services-exclusions__item-header'>
            <span>Exclusiones</span>
            <img src={chevrotSvg} alt='chevrot' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndExclusions;
