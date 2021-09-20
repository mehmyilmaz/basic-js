//import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 export default function sortByHeight(arr) {
  let index = [];
  arr.forEach((el, i) => el === -1 ? index.push(i) : null);
  arr = arr.filter(el => el !== -1).sort((a, b) => a - b);
  while (index.length) {
    arr.splice(index[0], 0, -1);
    index.shift();
  }
  return arr;
}
// Given an array with heights, sort them except if the value is -1. Your task is to implement function that accepts array (arr) and returns it sorted
//console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])) //  [-1, 150, 160, 170, -1, -1, 180, 190] 
