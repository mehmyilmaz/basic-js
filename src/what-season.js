//import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.keys(date).length) throw new Error('Invalid date!');

  let num = date.getMonth() + 1;
  switch (true) {
    case num >= 3 && num <= 5:
      return "spring";
    case num >= 6 && num <= 8:
      return "summer";
    case num >= 9 && num <= 11:
      return "autumn";
    case num === 1 || num === 2 || num === 12:
      return "winter";
  }
}
