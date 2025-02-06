function sumArray(array) {
  return !Array.isArray(array)
    ? 0
    : array.length > 2
    ? array
        .sort((a, b) => a - b)
        .slice(1, array.length - 1)
        .reduce((sum, el) => {
          return sum + el;
        })
    : 0;
}

console.log(Array.isArray(null));
console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([6, 2, 1, 8, 10]));
