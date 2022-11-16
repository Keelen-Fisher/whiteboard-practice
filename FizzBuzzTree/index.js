'use strict';

const { KaryNode, KaryTree } = require('./tree');

function fizzBuzz(originalTree){
  let newTree = new Tree();
  function fizzBuzzOrder(value){
    let newValue;
    if(value % 15 === 0){
      newValue = 'FizzBuzz';
    }
    else if(value % 3 === 0){
      newValue = 'Fizz';
    }
    else if(value % 5 === 0){
      newValue = 'Buzz';    
    }
    else{
      newValue = `${value}`;
    }
    return new KaryNode(newValue, 3); 
  }
  newTree.root = fizzBuzzOrder(originalTree.root.value);
  function traverse(originalNode, newNode){
    for (let i = 0; i < originalNode.children.length; i++){
      newNode.children[i] = fizzBuzzOrder(originalNode.children[i].value);
      traverse(originalNode.children[i], newNode.children[i]);
     }
  }
  traverse(originalTree.root, newTree.root);
  return newTree;
}


