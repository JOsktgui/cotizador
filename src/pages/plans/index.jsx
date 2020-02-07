import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  SidebarShared,
  SubHeader,
  PlanList,
  PlanSummary,
  PlanCard,
  ServicesAndExclusions
} from 'components';

import './styles.scss';

const Plans = () => {
  const history = useHistory();
  const [planSelected, setPlanSelected] = useState(0);

  return (
    <SidebarShared>
      <div className='container-plans__body'>
        <SubHeader
          step='2'
          title={`Elige <span>tu protección</span>`}
          description='Selecciona tu plan de salud ideal.'
        />

        <div className='container-plans__info'>
          <PlanList
            planSelected={planSelected}
            onChange={plan => setPlanSelected(plan)}
          />
          <PlanSummary />
          <PlanCard planSelected={planSelected} />
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
