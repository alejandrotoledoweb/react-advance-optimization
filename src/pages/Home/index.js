import { Link } from 'react-router-dom';
import './styles.css';

export const Home = () => {
  return (
    <div className='container'>
      <h1>Advanced React: Optimization Lesson</h1>
      <p className='home-description'>
        Get started by clicking the links to each exercise:
      </p>
      <ul className='home-list'>
        <li>Exercise 1: Introduction</li>
        <li>
          <Link to='/exercises/2'>Exercise 2: Memoizing Values</Link>
        </li>
        <li>
          <Link to='/exercises/3'>Exercise 3: Memoizing Components</Link>
        </li>
        <li>
          <Link to='/exercises/4'>Exercise 4: Memoizing Functions</Link>
        </li>
        <li>
          <Link to='/exercises/5'>Exercise 5: Code Splitting Modules</Link>
        </li>
        <li>
          <Link to='/exercises/6'>Exercise 6: Code Splitting Components</Link>
        </li>
        <li>
          <Link to='/exercises/7'>Exercise 7: Suspense</Link>
        </li>
        <li>Exercise 8: Review</li>
      </ul>
    </div>
  );
};
