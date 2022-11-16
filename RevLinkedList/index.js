const LinkedList = require('./linkedList.js')

function reverse(list)

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

function traverse(list){
  let current = list.head;
  let previous = null;
  let temp= null;
  while(current){
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
}
console.log(traverse(list));
