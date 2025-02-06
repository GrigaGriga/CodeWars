function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = 0;
    let blc = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        blc += 1;
        if (blc >= 2) {
          break;
        }
        continue;
      }
      if (arr[i] !== arr[j]) {
        num += 1;
        if (num >= 2) {
          return arr[i];
        }
      }
    }
  }
}
console.log(findUniq([1, 0, 0]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));
