console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ Implementation of Doubly LinkedList ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

const treeify = require("treeify");

class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // add element at the begining of LinkedList
  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    const oldHead = this.head;
    newNode.next = oldHead;
    oldHead.prev = newNode;
    this.head = newNode;
  }

  // add element at the end of LinkedList
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    const oldTail = currentNode;
    oldTail.next = newNode;
    newNode.prev = oldTail;
    this.tail = newNode;
  }

  // delete from begining of LinkedList
  deleteHead() {
    if (!this.head) {
      return;
    }
    // if there is only 1 item in the list
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    const removedHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    return removedHead.data;
  }

  // delete from end of LinkedList
  deleteTail() {
    if (!this.tail) {
      return;
    }
    // if there is only 1 item in the list
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    let currentNode = this.head;
    let secondLastNode = null;
    while (currentNode.next) {
      secondLastNode = currentNode;
      currentNode = currentNode.next;
    }
    const removedNode = currentNode;
    secondLastNode.next = null;
    this.tail = secondLastNode;
    return removedNode.data;
  }

  // search an element in the LinkedList
  search(data) {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // print the LinkedList
  printList() {
    const data = treeify.asTree(this.head, true);
    console.log(data);
  }
}

const list = new DoublyLinkedList();

// Testing appending values
list.append("is");
list.append("a");
list.append("Doubly");
list.append("LinkedList");
list.printList();

// Testing prepending values
list.prepend("This");
list.prepend("Folks!");
list.prepend("Hello");
list.printList();

// Testing delete head
list.deleteHead();
list.printList();

// Testing delete tail
list.deleteTail();
list.printList();

// Testing searching a value
const node = list.search("is");
console.log("Searched node : \n");
console.log(treeify.asTree(node, true));

// Creating a Singly LinkedList from an array

const input = [1, 2, 3, 4, -5, 6, -7, 8, 9, -10];
console.log(
  "Doubly LinkedList from array [" + input + "] looks like below: \n"
);
const listFromArray = new DoublyLinkedList();
input.forEach((val) => {
  listFromArray.append(val);
});
listFromArray.printList();
