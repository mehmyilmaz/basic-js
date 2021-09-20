//import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) {
  let result = null;
  let arr = n.toString().split('');
  let newArr = [...arr];
  if (!result) {
    result = Number(newArr.splice(1, newArr.length - 1).join(''));
  }

  for (let i = 1; i < arr.length; i++) {
    newArr = [...arr];
    newArr.splice(i, 1);
    let nextNum = Number(newArr.join(''));
    if (nextNum > result) result = nextNum;
  }
  return result;
}

// console.log(deleteDigit(152))  // 52
// console.log(deleteDigit(1001)) // 101
// console.log(deleteDigit(10)) // 1
// console.log(deleteDigit(222219)) // 22229
// console.log(deleteDigit(109)) // 19