import React from 'react';
import { includes } from 'lodash';
import { FormAddRelatives, SubHeader, SidebarShared } from 'components';

import './styles.scss';

const AddRelatives = props => {
  const { location } = props;

  return (
    <SidebarShared>
      <div className='add-relatives__body'>
        <SubHeader
          step='1'
          description={includes(location.search, 'fetch=false') ?
            'Cuéntanos un poco sobre ti' :
            'Valida que los datos sean correctos.'
          }
          title={includes(location.search, 'fetch=false') ?
            `Hola, <span>¡empecemos!</span>` :
            `Hola, <span>Luisa</span>`
          }
        />
        <div className='add-relatives__form'>
          <FormAddRelatives {...props} />
        </div>
      </div>
    </SidebarShared>
  );
};

export default AddRelatives;
