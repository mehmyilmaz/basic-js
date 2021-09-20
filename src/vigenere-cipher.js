import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor (type) {
    this.type = type === false;
    this.alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(str, key, cipher = '') {
    if (!str || !key) throw new Error('Incorrect arguments!');
    str = str.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < str.length; i++) {
      if (this.alph.indexOf(str[i]) === -1) {
        cipher += str[i];
        continue;
      }
      cipher += this.alph[(this.alph.indexOf(str[i]) + this.alph.indexOf(key[j])) % 26];
      if (j === key.length - 1) j = 0;
      else j++;
    }
    if (this.type) return cipher.split('').reverse().join('');
    return cipher;
  }
  decrypt(str, key, decription = '') {
    if (!str || !key) throw new Error('Incorrect arguments!');
    str = str.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < str.length; i++) {
      if (this.alph.indexOf(str[i]) === -1) {
        decription += str[i];
        continue;
      }
      decription += this.alph[(this.alph.indexOf(str[i]) - this.alph.indexOf(key[j]) + 26) % 26];
      if (j === key.length - 1) j = 0;
      else j++;
    }
    if (this.type) return decription.split('').reverse().join('');
    return decription;
  }
}
