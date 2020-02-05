import React, { useState } from 'react';
import Picker from 'react-datepicker';

import inputCalendarSvg from 'images/input-calendar.svg';

import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';


const DatePicker = ({ placeholder }) => {
  const [date, setDate] = useState(null);

  return (
    <div className='container-picker'>
      <Picker
        placeholderText={placeholder}
        selected={date}
        onChange={date => setDate(date)}
      />
      <img src={inputCalendarSvg} alt='calendar' />
    </div>
  );
};

export default DatePicker;
