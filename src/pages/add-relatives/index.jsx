import React from 'react';
import { FormAddRelatives, SubHeader, SidebarShared } from 'components';

import './styles.scss';

const AddRelatives = () => {
  return (
    <SidebarShared>
      <div className='add-relatives__body'>
        <SubHeader
          step='1'
          title={`Hola, <span>Luisa</span>`}
          description='Valida que los datos sean correctos.'
        />
        <div className='add-relatives__form'>
          <FormAddRelatives />
        </div>
      </div>
    </SidebarShared>
  );
};

export default AddRelatives;
