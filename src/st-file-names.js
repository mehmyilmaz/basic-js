//import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 export default function renameFiles(names) {
  let changedElements = [];
  if (!names.length) return [];
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      if (names[j] === names[i]) {
        let num = +(names[i].slice(-2, -1));
        if (isNaN(num)) {
          num = 1;
          names[j] = `${names[i]}(${num})`;
          changedElements.push(names[j]);
        } else {
          if (changedElements.includes(names[j])) {
            names[j] = `${names[i]}(${num})`;
            changedElements = changedElements.filter(el => el != names[i]);
          } else {
            names[j] = `${names[i].slice(0, -3)}(${+(names[i].slice(-2, -1)) + 1})`;
            changedElements.push(names[j]);
            changedElements = changedElements.filter(el => el != names[i]);
          }
        }
        i = -1;
        break;
      }
    }
  }
  return names;
}

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))  //['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
// console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']))  //['a', 'b', 'cd', 'b ', 'a(3)']
// console.log(renameFiles([]))  //[]
