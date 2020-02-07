import React, { useState } from 'react';
import { includes } from 'lodash';
import { useHistory } from 'react-router-dom';

import {
  Select,
  Input,
  Checkbox,
  Button,
  DatePicker
} from 'components';

import './styles.scss';

const data = [
  { name: 'DNI', id: 'dni' },
  { name: 'CR', id: 'cr' },
];

const FormHome = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    document: 'dni',
    mobile: '',
    number_document: ''
  });

  function buttonIsDisabled() {
    return values.number_document &&
      values.date_of_birth &&
      values.mobile &&
      values.accept_policies &&
      values.accept_shipping;
  }

  return (
    <div className='container-form-home'>
      <div className='container-form-home__title'>
        Obtén tu <span>seguro ahora</span>
      </div>

      <p>Ingresa los datos para comenzar.</p>

      <div className='container-form-home__form'>
        <div className='container-form-home__form-document'>
          <Select
            data={data}
            value={values.document}
            onChange={event => {
              setValues({
                ...values,
                document: event.target.value,
                number_document: ''
              })
            }}
          />
          <Input
            value={values.number_document}
            maxLength={values.document === 'dni' ? 8 : 12}
            showError={includes(values.number_document, '999')}
            messageError='El DNI no es correcto'
            placeholder='Nro. de Documento'
            onChange={event => setValues({ ...values, number_document: event.target.value })}
          />
        </div>

        <DatePicker
          placeholder='Fecha de nacimiento'
          value={values.date_of_birth}
          onChange={date => setValues({ ...values, date_of_birth: date })}
          maxDate={new Date()}
        />

        <Input
          maxLength={9}
          placeholder='Celular'
          value={values.mobile}
          onChange={event => setValues({ ...values, mobile: event.target.value })}
        />

        <Checkbox
          id='accept-policies'
          checked={values.accept_policies}
          onChange={event => setValues({ ...values, accept_policies: event.target.checked })}
        >
          Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.
        </Checkbox>

        <Checkbox
          checked={values.accept_shipping}
          id='accept-shipping-policies'
          onChange={event => setValues({ ...values, accept_shipping: event.target.checked })}
        >
          Acepto la Política de Envío de Comunicaciones Comerciales.
        </Checkbox>
      </div>

      <Button
        disabled={!buttonIsDisabled()}
        onClick={() => {
          if (buttonIsDisabled()) {
            if (includes(values.number_document, '111')) {
              history.push('/agregar-parientes?fetch=true');
            } else {
              history.push('/agregar-parientes?fetch=false');
            }
          }
        }}
      >
        COMENCEMOS
      </Button>
    </div>
  );
};

export default FormHome;
