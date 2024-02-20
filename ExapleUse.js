const arrayMethods = require("./index")

const arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];

console.log(arrayMethods.sumOfArray(arr));
console.log(arrayMethods.findAverage(arr));
console.log(arrayMethods.filterByCondition(arr, (num)=> num%2===0 ));
console.log(arrayMethods.findUniqueElements(arr))

const product = arrayMethods.customAggregation(arr, (accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product);

const fruits = ['apple', 'banana', 'kiwi'];
const colors = ['red', 'yellow', 'brown'];

const zippedPairs = arrayMethods.zipArrays(fruits, colors);

console.log(zippedPairs);

const students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
    { id: 3, name: 'Charlie', grade: 'A' },
    { id: 4, name: 'David', grade: 'B' },
    { id: 5, name: 'Eva', grade: 'A' }
];

const groupedByGrade = arrayMethods.groupByKey(students, (student) => student.grade);

console.log(groupedByGrade);

const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = arrayMethods.shuffleArray(originalArray);

console.log(shuffledArray);

const arrayWithOccurrences = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];
const elementCounts = arrayMethods.countOccurrences(arrayWithOccurrences);

console.log(elementCounts);