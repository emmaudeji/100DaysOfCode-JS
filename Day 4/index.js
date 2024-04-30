// How to return the count of numbers in an array. The array can have different types.
const countNumbers = (array) => {
  let count = 0;
  if (!Array.isArray(array) || !array.length) {
    return count;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      count += 1;
    }
    if (Array.isArray(array[i])) {
      count += countNumbers(array[i]);
    }
  }
  return count;
};

// countNumbers([1,3,'5','o',9]);
// countNumbers([1,3,'5','o',9]);
// countNumbers(['p', 'h', 0, 6, [8,9,'o'], [0], '0']);
// countNumbers([]);
console.log(countNumbers([1,3,'5','o',9]),countNumbers(['p', 'h', 0, 6, [8,9,'o'], [0], '0']), countNumbers([]))