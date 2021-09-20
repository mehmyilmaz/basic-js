import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let teamName = [];
  members.forEach(name => typeof name === 'string' ? teamName.push(name.toUpperCase().trim().charAt(0)) : null);
  return teamName.sort((a, b) => a.localeCompare(b)).join('');
}
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])) // 'LOO'