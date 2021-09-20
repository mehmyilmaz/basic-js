import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 let result = null;
 export default function getSumOfDigits(n) {
   let num = n.toString().split('').reduce((acc, el) => +acc + +el);
   if (num > 9) {
     getSumOfDigits(num);
   } else {
     result = num;
   }
   return result;
 }
 
 // console.log(getSumOfDigits(832));
 // console.log(getSumOfDigits(91));
 
 // Your task is to implement function that accepts a number (n) and returns the sum of its digits until we get to a one digit number.
 
 // For example:
 // For 100, the result should be 1 (1 + 0 + 0 = 1)
 // getSumOfDigits(100) => 1 For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 // getSumOfDigits(91) => 1
 // Write your code in src/st-sum-digits.js.
