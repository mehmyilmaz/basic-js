//import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 constructor(direction = null) {
  this.direction = direction;   // true/false
}

getFullKey(str, key) {  // получаем ключ такой же длины с пробелами и символами как у исходной строки
  let fullKey = [];
  let keyLength = '';
  let indexForKey = 0;
  let getStrArr = str.toUpperCase().split('');
  while (keyLength.length < str.length) {
    keyLength += key;
  }
  let keyArr = keyLength.toUpperCase().split('');
  for (let i = 0; i < getStrArr.length; i++) {
    if (letters.includes(getStrArr[i])) {
      fullKey.push(keyArr[indexForKey])
      indexForKey++;
    } else {
      fullKey.push(getStrArr[i]);
    }
  }
  return fullKey;
}

encrypt(str, key) {
  if (!str || !key) throw new Error(`Incorrect arguments!`);
  let getStrArr = str.toUpperCase().split('');  //массив исходной строки
  let getKeyArr = this.getFullKey(str, key);

  let result = getStrArr.map((el, i) => {
    const indexStr = letters.indexOf(getStrArr[i]);   // вычисляем индекс нужного символа согласно таблицы Vigenere
    const indexKey = letters.indexOf(getKeyArr[i]);   // c = m + k
    const resultIndex = indexStr + indexKey;
    const indexCode = (resultIndex >= letters.length) ? resultIndex - letters.length : resultIndex;
    if (letters.includes(el)) {
      return el = letters[indexCode];
    } else {
      return el;
    }
  })
  return this.direction === false ? result.reverse().join('') : result.join('');
}

decrypt(str, key) {
  if (!str || !key) throw new Error(`Incorrect arguments!`);
  let getStrArr = str.toUpperCase().split('');  //массив исходной строки
  let getKeyArr = this.getFullKey(str, key);

  let result = getStrArr.map((el, i) => {
    const indexStr = letters.indexOf(getStrArr[i]);   // вычисляем индекс нужного символа согласно таблицы Vigenere
    const indexKey = letters.indexOf(getKeyArr[i]);   // m = (c + length) - k
    const resultIndex = (indexStr + letters.length) - indexKey;
    const indexCode = resultIndex >= letters.length ? resultIndex - letters.length : resultIndex;
    if (letters.includes(el)) {
      return el = letters[indexCode];
    } else {
      return el;
    }
  })
  return this.direction === false ? result.reverse().join('') : result.join('');
}
}

// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))