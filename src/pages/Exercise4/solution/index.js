import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { GraphPoint } from './GraphPoint';
import './styles.css';

export const Exercise4 = () => {
  const [showExplainer, setShowExplainer] = useState(false);

  const setGraphPointOn = useCallback(() => {
    return Math.random() > 0.8;
  }, []);

  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 4: Memoizing Functions</h1>
      <div className='e3-container'>
        <div className='e3-header'>
          <div>
            <h2>GitHub randomizer 2</h2>
            <p>Create a randomized GitHub contribution graph</p>
          </div>
          <button
            className='e3-button'
            onClick={() => setShowExplainer(!showExplainer)}
          >
            {showExplainer ? 'Hide' : 'Show'} Explainers
          </button>
        </div>
        {showExplainer && (
          <p className='e3-explainer'>
            The git contribution graph below is randomized. Only 20% of the
            contributions are green.
          </p>
        )}
        <div className='e3-contribution-graph'>
          {[...Array(10000)].map((_, index) => (
            <GraphPoint key={index} setGraphPointOn={setGraphPointOn} />
          ))}
        </div>
      </div>
    </div>
  );
};
