import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Exercise5 = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [value, setValue] = useState('N/A');

  async function onClick() {
    const moment = await import('moment');
    const reservationDateAndTime = moment
      .default('2022-04-26T23:30:00.000Z')
      .format('MM/D/YYYY h:mmA');
    setValue(reservationDateAndTime);
    setDetailsVisible(!detailsVisible);
  }

  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 5: Code Splitting Modules</h1>
      <div className='e5-container'>
        <div className='e5-content-container'>
          <img src={require('./logo.png')} alt='Restaurant logo' />
          <h1>Your reservation is confirmed.</h1>
          <button onClick={onClick}>
            {detailsVisible ? 'Hide' : 'View'} Details
          </button>
        </div>
        {detailsVisible && (
          <div className='e5-details'>
            <p>Date and time: {value}</p>
            <p>Party: 2 adults</p>
          </div>
        )}
      </div>
    </div>
  );
};
