import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  SidebarShared,
  SubHeader,
  CarouselPlans,
  PlanSummary,
  PlanCard,
  ServicesAndExclusions
} from 'components';

import './styles.scss';

const Plans = () => {
  const history = useHistory();

  return (
    <SidebarShared>
      <div className='container-plans__body'>
        <SubHeader
          step='2'
          title={`Elige <span>tu protección</span>`}
          description='Selecciona tu plan de salud ideal.'
        />

        <div className='container-plans__info'>
          <PlanSummary />
          <PlanCard />
          <ServicesAndExclusions />
        </div>

        <div className='container-plans__footer'>
          <span>ENVIAR COTIZACIÓN POR CORREO</span>
          <div className='container-plans__footer-button'>
            <Button onClick={() => history.push('/gracias')}>COMPRAR PLAN</Button>
          </div>
        </div>
      </div>
    </SidebarShared>
  );
};

export default Plans;
