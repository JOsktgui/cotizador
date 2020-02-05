import React, { useState } from 'react';
import cn from 'classnames';

import arrowDown from 'images/gl_arrow_down.svg';

import './styles.scss';

const PlanSummary = () => {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className='container-plan-summary'>
      <div className='container-plan-summary__header'>
        <span>Tienes (3) asegurados</span>
        <span onClick={() => setShowSummary(!showSummary)}>
          RESUMEN DEL PLAN
          <img
            className={cn({ open: showSummary })}
            src={arrowDown}
            alt='arrow-down'
          />
        </span>
      </div>

      { showSummary &&
        <>
          <div className='container-plan-summary__body'>
            <div className='container-plan-summary__body-item'>
              <span>Cónyugue</span>
              <div>
                <span>S/</span>
                40
              </div>
            </div>
            <div className='container-plan-summary__body-item'>
              <span>Cónyugue</span>
              <div>
                <span>S/</span>
                40
              </div>
            </div>
          </div>

          <div className='container-plan-summary__footer'>
            <span>PAGO TOTAL MENSUAL</span>
            <div>
              S/ 160
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default PlanSummary;
