import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';

import './styles.css';

const Details = React.lazy(() => {
  // Artificially making loadind the <Details> component take 1 second
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(import('./Details')), 1000);
  });
});

export const Exercise7 = () => {
  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 7: Suspense</h1>
      <div className='e7-container'>
        <div className='e7-content-container'>
          <img src={require('./logo.png')} alt='Restaurant logo' />
          <h1>Your reservation is confirmed.</h1>
        </div>
        <Suspense fallback={<Loader />}>
          <Details />
        </Suspense>
      </div>
    </div>
  );
};
