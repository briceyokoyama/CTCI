function rotateMatrix(matrix) {
  for (let i = 0; i < Math.floor(matrix.length/2); i++) {
    for (let j = i; j < matrix.length - 1 - i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - 1 - j][i];
      matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i];
      matrix[j][matrix.length - 1 - i] = temp;
    }
  }
  return matrix;
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))