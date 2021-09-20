//import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let newAr = [...arr];
  for (let i = 0; i < newAr.length; i++) {
    switch (newAr[i]) {
      case '--double-next':
        if (newAr[i + 1] === undefined) {
          newAr.splice(i, 1);
          break;
        }
        newAr[i] = newAr[i + 1];
        break;
      case '--double-prev':
        if (newAr[i - 1] === undefined) {
          newAr.splice(i, 1);
          break;
        }
        newAr[i] = newAr[i - 1];
        break;
      case '--discard-next':
        if (newAr[i + 1] === undefined) {
          newAr.splice(i, 1);
          break;
        }
        if (typeof newAr[i + 2] === 'string') {
          newAr.splice(i, 3)
          break;
        }
        newAr.splice(i, 2)
        break;
      case '--discard-prev':
        if (newAr[i - 1] === undefined) {
          newAr.splice(i, 1);
          break;
        }
        if (typeof newAr[i + 2] === 'string') {
          newAr.splice(i - 2, 3)
          break;
        }
        newAr.splice(i - 1, 2)
        break;
      default:
        break;
    }
  }
  return newAr;
}

// console.log(transform(['--discard-prev', 1, 2, 3]))
// console.log(transform(['--double-prev', 1, 2, 3]))
// console.log(transform([1, 2, 3, '--double-next']))
// console.log(transform([1, 2, 3, '--discard-next']))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) // [1, 2, 3, 4, 5]
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])) // [1, 2, 3, 1337, 1337, 1337, 4, 5]
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])) // [1, 2, 3, 4, 5]
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])) // [1, 2, 3, 1337, 4, 5]
// console.log(transform(false))
// console.log(transform(null))
// console.log(transform(undefined))
// console.log(transform({ 'foo': 'bar' }))
