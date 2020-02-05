import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { SelectInput, Input, FamilyData, RadioGroup, Button } from 'components';

import chevrotRightSvg from 'images/chevrot-right.svg';

import './styles.scss';

const gender = [
  { name: 'Masculino', id: 'male' },
  { name: 'Femenino', id: 'female' }
];

const ensure = [
  { name: 'Solo a mí', id: 'only-me' },
  { name: 'A mí y a mi familia', id: 'me-and-family' }
];

const FormAddRelatives = () => {
  const [addFamily, setAddFamily] = useState(false);
  const history = useHistory();

  return (
    <div className='form-add-relatives'>
      <div className='form-add-relatives__title'>
        Datos personales del titular
      </div>

      <SelectInput />
      <Input placeholder='Nombres' />
      <Input placeholder='Apellido Paterno' />
      <Input placeholder='Apellido Materno' />
      <Input placeholder='Fecha de nacimiento' />

      <RadioGroup data={gender} title='Género' />
      <RadioGroup
        onChange={value => setAddFamily(value === 'me-and-family')}
        data={ensure}
        title='¿A quién vamos a asegurar?'
      />

      { addFamily && <FamilyData /> }

      <div className='form-add-relatives__footer'>
        <div>
          <Button onClick={() => history.push('/planes')}>
            CONTINUAR <img src={chevrotRightSvg} alt='chevrot'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormAddRelatives;
