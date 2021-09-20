//import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  values: [],
  getLength() {
    return this.values.length;
  },
 
    addLink(value) {
      this.values.push(`( ${value} )`);
      return this;
  },
    removeLink(position) {
      if (typeof position !== 'number' || position <= 0 || position > this.values.length) {
        this.values = [];
        throw new Error(`You can't remove incorrect link!`);
      }
      this.values.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    let result = this.values.join('~~')
    this.values = [];
    return result;
  }
};

// chainMaker.addLink(1).addLink(2).addLink(3).finishChain() // '( 1 )~~( 2 )~~( 3 )'

// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() // '( 2 )~~( 3 )'

// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() //  '( 2 )~~( 1 )~~( 3 )'
