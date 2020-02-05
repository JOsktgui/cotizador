import React from 'react';
import { useHistory } from 'react-router-dom';
import { SelectInput, Input, Checkbox, Button, DatePicker } from 'components';

import './styles.scss';

const FormHome = () => {
  const history = useHistory();

  return (
    <div className='container-form-home'>
      <div className='container-form-home__title'>
        Obtén tu <span>seguro ahora</span>
      </div>

      <p>Ingresa los datos para comenzar.</p>

      <div className='container-form-home__form'>
        <SelectInput />
        <DatePicker placeholder='Fecha de nacimiento' />
        <Input type='number' placeholder='Celular' />
        <Checkbox id='accept-policies'>
          Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.
        </Checkbox>
        <Checkbox id='accept-shipping-policies'>
          Acepto la Política de Envío de Comunicaciones Comerciales.
        </Checkbox>
      </div>

      <Button onClick={() => history.push('/agregar-parientes')}>
        COMENCEMOS
      </Button>
    </div>
  );
};

export default FormHome;
