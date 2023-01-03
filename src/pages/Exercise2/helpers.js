export function checkIfPrime(number) {
  // artificially slow code
  for (let i = 0; i < number * 10000; i++) {
    Math.random();
  }

  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
