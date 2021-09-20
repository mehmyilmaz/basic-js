import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 export default function minesweeper(matrix) {
  let amountOfMines = 0;
  let coordinate = [];

  matrix.forEach((el, i) => el.forEach((e, j) => {
    if (e === true) {
      amountOfMines++;
      coordinate.push({ i: i, j: j });
    }
  }))

  if (!amountOfMines) {
    return matrix.map(el => el.map(e => e = 0))
  }

  let firstChecking = matrix.forEach((el, i) => el.map((e, j) => {
    if (el[j - 1] === true || el[j + 1] === true) {
      return matrix[i][j] = 2;
    }
    return matrix[i][j] = 1
  }));
  matrix[0][1] = 2;

  return matrix;
}

// matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]

// matrix2 = [
//   [false, false, false],
//   [false, false, false],
// ]

// console.log(minesweeper(matrix));
// console.log(minesweeper(matrix2));