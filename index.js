// Calculate the sum of elements in an array.
const sumOfArray = (arr) => {
    // Using reduce to accumulate the sum.
    const sum = arr.reduce((total, curr) => {
      return total + curr;
    }, 0);
    return sum;
  };
  
  // Find the average value of elements in an array.
  const findAverage = (arr) => {
    // Throw an error for an empty array.
    if (arr.length === 0) {
      throw new Error("The array is empty");
    }
    // Calculate the average using the sumOfArray function.
    const average = sumOfArray(arr) / arr.length;
    return average;
  };
  
  // Filter elements based on a custom condition.
  const filterByCondition = (array, condition) => {
    // Validate input types.
    if (!Array.isArray(array) || typeof condition !== "function") {
      throw new Error(
        "Invalid input. Please provide a valid array and a function as the condition."
      );
    }
    // Use the array.filter method to apply the condition.
    return array.filter(condition);
  };
  
  // Return an array containing only unique elements.
  const findUniqueElements = (array) => {
    // Validate input type.
    if (!Array.isArray(array)) {
      throw new Error("Invalid input. Please provide a valid array.");
    }
    // Use Set to automatically remove duplicates.
    return Array.from(new Set(array));
  };
  
  // Split the array into subarrays based on a condition.
  const partitionIntoSubarrays = (array, condition) => {
    // Validate input types.
    if (!Array.isArray(array) || typeof condition !== "function") {
      throw new Error(
        "Invalid input. Please provide a valid array and a function as the condition."
      );
    }
    // Use forEach to categorize elements into satisfied and unsatisfied arrays.
    const satisfied = [];
    const unsatisfied = [];
    array.forEach((element) => {
      condition(element) ? satisfied.push(element) : unsatisfied.push(element);
    });
    return [satisfied, unsatisfied];
  };
  
  // Allow users to specify a custom aggregation function.
  const customAggregation = (array, aggregator, initialValue) => {
    // Validate input types.
    if (!Array.isArray(array) || typeof aggregator !== "function") {
      throw new Error(
        "Invalid input. Please provide a valid array and a function as the aggregator."
      );
    }
    // Use reduce to apply the custom aggregation.
    return array.reduce(aggregator, initialValue);
  };
  
  // Combine two arrays into pairs.
  const zipArrays = (array1, array2) => {
    // Validate input types and length.
    if (
      !Array.isArray(array1) ||
      !Array.isArray(array2) ||
      array1.length !== array2.length
    ) {
      throw new Error(
        "Invalid input. Please provide two valid arrays with the same length."
      );
    }
    // Use map to create pairs of elements at corresponding indices.
    return array1.map((element, index) => [element, array2[index]]);
  };
  
  // Group elements by a specified key.
  const groupByKey = (array, keySelector) => {
    // Validate input types.
    if (!Array.isArray(array) || typeof keySelector !== "function") {
      throw new Error(
        "Invalid input. Please provide a valid array and a function as the keySelector."
      );
    }
    // Use reduce to group elements into an object based on the key.
    return array.reduce((grouped, element) => {
      const key = keySelector(element);
      grouped[key] ? grouped[key].push(element) : (grouped[key] = [element]);
      return grouped;
    }, {});
  };
  
  // Randomly shuffle the elements of an array.
  const shuffleArray = (array) => {
    // Validate input type.
    if (!Array.isArray(array)) {
      throw new Error("Invalid input. Please provide a valid array.");
    }
    // Use Fisher-Yates algorithm for shuffling.
    const shuffledArray = [...array]; // Create a shallow copy to avoid modifying the original array.
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  
  // Return counts of occurrences for each element in an array.
  const countOccurrences = (array) => {
    // Validate input type.
    if (!Array.isArray(array)) {
      throw new Error("Invalid input. Please provide a valid array.");
    }
    // Use reduce to count occurrences of each element.
    return array.reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;
      return acc;
    }, {});
  };
  
  // Exported object containing all array methods.
  const arrayMethods = {
    sumOfArray,
    findAverage,
    filterByCondition,
    findUniqueElements,
    partitionIntoSubarrays,
    customAggregation,
    zipArrays,
    groupByKey,
    shuffleArray,
    countOccurrences,
  };
  
  module.exports = arrayMethods;
  