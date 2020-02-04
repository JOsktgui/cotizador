import React from 'react';
import { SelectInput, Input, Checkbox, Button } from 'components';
import './styles.scss';

const FormHome = () => {
  return (
    <div className='container-form-home'>
      <div className='container-form-home__title'>
        Obtén tu <span>seguro ahora</span>
      </div>

      <p>Ingresa los datos para comenzar.</p>

      <div className='container-form-home__form'>
        <SelectInput />
        <Input placeholder='Fecha de nacimiento' />
        <Input type='number' placeholder='Celular' />
        <Checkbox id='accept-policies'>
          Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.
        </Checkbox>
        <Checkbox id='accept-shipping-policies'>
          Acepto la Política de Envío de Comunicaciones Comerciales.
        </Checkbox>
      </div>

      <Button>
        COMENCEMOS
      </Button>
      {/*6868*/}
    </div>
  );
};

export default FormHome;
