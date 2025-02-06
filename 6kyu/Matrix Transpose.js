function transpose(matrix) {
  let newarr = [];
  for (let k = 0; k < matrix[0].length; k++) {
    let abc = [];
    newarr.push(abc);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      newarr[j][i] = matrix[i][j];
    }
  }
  return newarr;
}

console.log(transpose([[1]])); // [[1]]
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [[1,4],[2,5],[3,6]]
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  transpose([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
