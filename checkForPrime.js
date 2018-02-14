'use strict'
// ****************************** ES6 ********************************************
// Take in number of prime numbers from the command line.
const numberOfPrimes = process.argv[2];

// Initialize empty results array and currentNum.
let primeNumberArr = [], currentNum = 1;

// Returns true (i.e. number is prime) if number is not divisible by any of the previously found prime numbers excluding 1;
const checkIfPrime = number => number === 1 || primeNumberArr.every(primeNum => primeNum === 1 || number % primeNum);

while (primeNumberArr.length < numberOfPrimes) {
  checkIfPrime(currentNum) ? primeNumberArr.push(currentNum) : null;
  currentNum += 1;
}

console.log(primeNumberArr);


// ****************************** ES5 ********************************************
// Take in number of prime numbers from the command line.
var numberOfPrimes = process.argv[2];

// Initialize empty results array and currentNum.
var primeNumberArr = [], currentNum = 1;

// Returns true (i.e. number is prime) if number is not divisible by any of the previously found prime numbers excluding 1;
function checkIfPrime (number) {
  if (number === 1) {
    return true;
  } else {
    return primeNumberArr.every(function (primeNum) {
      return primeNum === 1 || number % primeNum;
    });
  }
}

while (primeNumberArr.length < numberOfPrimes) {
  if (checkIfPrime(currentNum)) {
    primeNumberArr.push(currentNum);
  }
  currentNum += 1;
}

console.log(primeNumberArr);