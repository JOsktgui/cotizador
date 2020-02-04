import React from 'react';
import './styles.scss';

const SelectInput = () => {
  return (
    <div className='container-select-input'>
      <select defaultValue='value1' name='select'>
        <option value='value1'>CE</option>
        <option value='value2'>DNI</option>
      </select>
      <input
        placeholder='Nro. de Documento'
        type='text'
      />
    </div>
  );
};

export default SelectInput;
