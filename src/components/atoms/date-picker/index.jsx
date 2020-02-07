import React from 'react';
import Picker from 'react-datepicker';

import inputCalendarSvg from 'images/input-calendar.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';


const DatePicker = ({ placeholder, value, onChange, ...rest }) => {
  return (
    <div className='container-picker'>
      <Picker
        placeholderText={placeholder}
        selected={value}
        onChange={onChange}
        {...rest}
      />
      <img src={inputCalendarSvg} alt='calendar' />
    </div>
  );
};

export default DatePicker;
