import React from 'react';

import { Button, SidebarThanks } from 'components';

import personStraight from 'images/person-straight.svg';

import './styles.scss';

const Thanks = () => {
  return (
    <div className='container-thanks'>
      <SidebarThanks />

      <div className='container-thanks__body'>

        <div className='container-thanks__body-person'>
          <img src={personStraight} alt='person-straight' />
        </div>

        <div className='container-thanks__body-header'>
          ¡Gracias por <span>confiar en nosotros!</span>
        </div>

        <p>
          Queremos conocer mejor la salud de los asegurados.
          <span>Un asesor se pondrá en contacto</span> contigo en las siguientes <span>48 horas.</span>
        </p>

        <div className='container-thanks__body-footer'>
          <Button onClick={() => window.open('https://www.rimac.com/', '_blank')}>
            IR A SALUD RIMAC
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
