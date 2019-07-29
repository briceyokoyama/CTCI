function zeroMatrix(matrix) {
  // let rows = {};
  // let cols = {}

  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     if (matrix[i][j] === 0) {
  //       rows[i] = true;
  //       cols[j] = true;
  //     }
  //   }
  // }

  // for (let row in rows) {
  //   for (let i = 0; i < matrix[row].length; i++) {
  //     matrix[row][i] = 0;
  //   }
  // }

  // for (let col in cols) {
  //   for (let i = 0; i < matrix.length; i++) {
  //     matrix[i][col] = 0;
  //   }
  // }

  // return matrix;

  let rowHasZero = false;
  let colHasZero = false;

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      nullifyCol(matrix, i)
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i)
    }
  }

  if (rowHasZero) {
    nullifyRow(matrix, 0);
  }

  if (colHasZero) {
    nullifyCol(matrix, 0);
  }

  return matrix;

}

function nullifyRow(matrix, row) {

  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }

  return matrix;
}

function nullifyCol(matrix, col) {

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }

  return matrix;
}



console.log(zeroMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 0]]));
console.log(zeroMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(zeroMatrix([[1, 0, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15 ,0]]));