import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IsPrime } from './IsPrime';

import './styles.css';

export const Exercise2 = () => {
  const [number, setNumber] = useState(8191);
  const [showExplainer, setShowExplainer] = useState(false);

  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 2: Memoizing Values</h1>
      <div className='e2-container'>
        <div className='e2-header'>
          <div>
            <h2>Prime checker</h2>
            <p>See if a number is prime by typing below</p>
          </div>
          <button
            className='e2-button'
            onClick={() => setShowExplainer(!showExplainer)}
          >
            {showExplainer ? 'Hide' : 'Show'} Explainers
          </button>
        </div>
        <input
          className='e2-input'
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          type='number'
        />
        <IsPrime number={number} showExplainer={showExplainer} />
      </div>
    </div>
  );
};
