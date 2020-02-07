import React, { useState } from 'react';
import uuidV1 from 'uuid/v1';
import cn from 'classnames';
import { format } from 'date-fns'
import { map, filter } from 'lodash';
import { Select, DatePicker } from 'components';

import plusSvg from 'images/ic_plus.svg';
import deleteSvg from 'images/ic_delete.svg';

import './styles.scss';

const options = [
  { name: 'Cónyuge', id: 'conyuge' },
  { name: 'Hijo', id: 'hijo' },
];

const FamilyData = ({ data, onChange }) => {
  const [member, setMember] = useState('conyuge');
  const [date, setDate] = useState(undefined);

  function addFamily() {
    onChange([...data, {
      id: uuidV1(),
      name: member,
      date
    }]);

    setDate(undefined);
  }

  function removeFamily(id) {
    const newData = filter(data, item => item.id !== id);

    onChange(newData);
  }

  return (
    <div className='family-data'>
      <div className='family-data__title'>
        Datos de los familiares
      </div>

      <div className='family-data__header'>
        <div className='family-data__header-document'>
          <Select
            data={options}
            value={member}
            onChange={event => setMember(event.target.value)}
          />
          <DatePicker
            placeholder='F. Nacimiento'
            value={date}
            onChange={date => setDate(date)}
          />
        </div>
        <div
          className={cn('family-data__header-add', { disabled: !date })}
          onClick={() => date && addFamily()}
        >
          <img src={plusSvg} alt='plus' />
          <span>AGREGAR</span>
        </div>
      </div>

      <div className='family-data__body'>
        { map(data, ({ id, name, date }) => {
          return (
            <div className='family-data__body-item' key={id}>
              <div>
                <span>{ name }</span>
                <span>{ format(date, 'dd/MM/yyyy') }</span>
              </div>

              <div
                className='family-data__body-remove'
                onClick={() => removeFamily(id)}
              >
                <img src={deleteSvg} alt='delete' />
                <span>ELIMINAR</span>
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  );
};

export default FamilyData;
