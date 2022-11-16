'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k) {
    this.value = value;
    this.k = k;
    this.children = [];
    
  }
}

class KaryTree {
  constructor(){
    this.root = null;
  }
}

module.exports = { KaryNode, KaryTree };
