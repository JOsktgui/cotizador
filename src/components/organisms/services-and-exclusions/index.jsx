import React, { useState } from 'react';

import chevrotSvg from 'images/chevrot.svg';
import personPlanSvg from 'images/person-plan.svg';

import './styles.scss';

const ServicesAndExclusions = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

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
          <div
            className='container-services-exclusions__item-header'
            onClick={() => setOpenFirst(!openFirst)}
          >
            <span>Servicios brindados</span>
            <img src={chevrotSvg} alt='chevrot' />
          </div>
          { openFirst &&
            <div className='container-services-exclusions__item-body'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aperiam corporis cumque dignissimos eius ex fugiat nulla
              odit quidem saepe. Amet atque commodi doloribus eligendi
              explicabo incidunt neque officia quo reiciendis.
            </div>
          }
        </div>
        <div className='container-services-exclusions__item'>
          <div
            className='container-services-exclusions__item-header'
            onClick={() => setOpenSecond(!openSecond)}
          >
            <span>Exclusiones</span>
            <img src={chevrotSvg} alt='chevrot' />
          </div>
          { openSecond &&
            <div className='container-services-exclusions__item-body'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aperiam corporis cumque dignissimos eius ex fugiat nulla
              odit quidem saepe. Amet atque commodi doloribus eligendi
              explicabo incidunt neque officia quo reiciendis.
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ServicesAndExclusions;
