//import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 export default function getEmailDomain(email) {
  let index;
  email.split('').forEach((e, i) => e === '@' ? index = i : null);
  return email.slice(index + 1, email.length);
}
// console.log(getEmailDomain('prettyandsimple@example.com'))  // example.com
