import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine(str) {
  let result = '';
  let indexes = [];
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result += arr[i];
      break;
    }
    if (arr[i] !== arr[i + 1]) result += arr[i];
    if (arr[i] === arr[i + 1]) {
      indexes.push(i);
      for (let j = i; j < arr.length; j++) {
        if (arr[j] !== arr[j + 1] || arr[j + 1] === 'undefined') {
          indexes.push(j);
          break;
        }
      }
      result += (indexes[1] + 1 - indexes[0]) + arr[i];
      i = indexes[1];
      indexes = [];
    }
  }
  return result;
}

// console.log(encodeLine('aaaatttt')) //'4a4t'
// console.log(encodeLine('aabbccc'))  // '2a2b3c'
// console.log(encodeLine('abbcca')) //'a2b2ca'
// console.log(encodeLine('xyz')) // 'xyz'
// console.log(encodeLine('')) // ''
