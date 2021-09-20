//import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 export default function getDNSStats(domains) {
  let result = {};
  let exist = [];
  let str = domains.join('');
  let domainsElem = domains.map(el => el.split('.').reverse()).flat();

  domainsElem.forEach(domain => {
    let regexp = new RegExp(`${domain}`, 'g');
    let amount = str.match(regexp);
    let keys = Object.keys(result);
    if (!exist.includes(domain)) {
      result[`${keys[keys.length - 1] || ''}.${domain}`] = amount.length;
    }
    exist.push(domain);
  })
  return result;
}

// console.log(getDNSStats(['epam.com', 'info.epam.com'])); //{ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }
// console.log(getDNSStats([])); //{} 