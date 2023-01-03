import { useMemo } from 'react';
import { checkIfPrime } from './helpers';

export const IsPrime = (props) => {
  const { number, showExplainer } = props;
  const isPrime = useMemo(() => checkIfPrime(number), [number]);

  return (
    <div>
      <h3 className='e2-result'>
        {isPrime ? 'Confirmed prime number' : 'Not a prime number'}
      </h3>
      {showExplainer && (
        <p className='e2-explainer'>
          Prime numbers are a positive integer that is greater than 1 and is not
          divisible without a remainder by any positive integer other than
          itself and 1.
        </p>
      )}
    </div>
  );
};
