/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = "") {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position <= this.chain.length &&
      this.chain[position - 1]
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
