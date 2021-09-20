//import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 export default function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i - 1] === undefined || matrix[i - 1][j] !== 0) result += matrix[i][j];
    }
  }
  return result;
}

// console.log(getMatrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
// ]))  //9
// console.log(getMatrixElementsSum([
//   [1, 2, 3, 4],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]))  //15
// console.log(getMatrixElementsSum([
//   [1],
//   [5],
//   [0],
//   [2],
// ]))  //6
// console.log(getMatrixElementsSum([
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ]))  //18