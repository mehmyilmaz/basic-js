//import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 export default function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');

  for (let i = 0; i < s1Arr.length; i++) {
    if (s2Arr.includes(s1Arr[i])) {
      result++;
      let idx1 = s1Arr.indexOf(s1Arr[i]);
      let idx2 = s2Arr.indexOf(s1Arr[i]);
      s1Arr.splice(idx1, 1)
      s2Arr.splice(idx2, 1)
      i = -1;
    }
    if (!s1Arr.length) return result;
  }
  return result;
}

// console.log(getCommonCharacterCount('aabcc', 'adcaa'))  // 3
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')) // 4
// console.log(getCommonCharacterCount('abca', 'xyzbac')) // 3
// console.log(getCommonCharacterCount('', 'abc')) // 0
// console.log(getCommonCharacterCount('a', 'b')) //0

