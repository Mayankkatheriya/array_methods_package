# Array Methods Package

A utility package providing various higher-order functions for working with arrays in JavaScript.

## Installation

```bash
npm install array_methods_10
```


## Usage

```js
const arrayMethods = require('array_methods_10');

// Example usage of available functions:

// Calculate the sum of an array
const sum = arrayMethods.sumOfArray([1, 2, 3, 4, 5]);
console.log('Sum:', sum);

// Find the average of an array
const average = arrayMethods.findAverage([1, 2, 3, 4, 5]);
console.log('Average:', average);

// Filter elements based on a custom condition
const evenNumbers = arrayMethods.filterByCondition([1, 2, 3, 4, 5], (num) => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// Return an array containing only unique elements
const uniqueElements = arrayMethods.findUniqueElements([1, 2, 2, 3, 3, 4, 5]);
console.log('Unique Elements:', uniqueElements);

// Split the array into subarrays based on a condition
const [satisfied, unsatisfied] = arrayMethods.partitionIntoSubarrays([1, 2, 3, 4, 5], (num) => num > 3);
console.log('Satisfied:', satisfied);
console.log('Unsatisfied:', unsatisfied);

// Allow users to specify a custom aggregation function
const product = arrayMethods.customAggregation([1, 2, 3, 4, 5], (acc, curr) => acc * curr, 1);
console.log('Product:', product);

// Combine two arrays into pairs
const zippedPairs = arrayMethods.zipArrays(['a', 'b', 'c'], [1, 2, 3]);
console.log('Zipped Pairs:', zippedPairs);

// Group elements by a specified key
const groupedByType = arrayMethods.groupByKey(['apple', 'banana', 'orange', 'grape'], (fruit) => fruit.length);
console.log('Grouped by Type:', groupedByType);

// Randomly shuffle the elements of an array
const shuffledArray = arrayMethods.shuffleArray([1, 2, 3, 4, 5]);
console.log('Shuffled Array:', shuffledArray);

// Return counts of occurrences for each element in an array
const occurrences = arrayMethods.countOccurrences([1, 2, 2, 3, 3, 3, 4, 5]);
console.log('Occurrences:', occurrences);
