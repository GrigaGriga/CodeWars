function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let ost = target - numbers[i];
    let ind2 = numbers.indexOf(ost);
    if (ind2 >= 0 && ind2 !== i) {
      return [i, ind2];
    }
  }
}

console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
console.log(twoSum([3, 2, 4], 6)); // returns [1, 2] or [2, 1]
