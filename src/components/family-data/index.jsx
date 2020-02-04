import React from 'react';
import plusSvg from 'images/ic_plus.svg';
import deleteSvg from 'images/ic_delete.svg';

import { SelectInput } from 'components';

import './styles.scss';

const FamilyData = () => {
  return (
    <div className='family-data'>
      <div className='family-data__title'>
        Datos de los familiares
      </div>

      <div className='family-data__header'>
        <SelectInput />
        <img src={plusSvg} alt='plus' />
        <span>AGREGAR</span>
      </div>

      <div className='family-data__body'>
        <div className='family-data__body-item'>
          <div>
            <span>Conyuge</span>
            <span>12/12/1980</span>
          </div>

          <img src={deleteSvg} alt='plus' />
          <span>ELIMINAR</span>
        </div>

        <div className='family-data__body-item'>
          <div>
            <span>Conyuge</span>
            <span>12/12/1980</span>
          </div>

          <img src={deleteSvg} alt='plus' />
          <span>ELIMINAR</span>
        </div>
      </div>
    </div>
  );
};

export default FamilyData;
