console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ Implementation of Singly LinkedList ~~~~~~~~~~~~~~~~~~~~~~~~~~~",
);

const treeify = require("treeify");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class SinglyLinkedList {
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
    newNode.next = this.head;
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
    currentNode.next = newNode;
  }

  // delete from begining of LinkedList
  deleteHead() {
    if (!this.head) {
      return;
    }
    // only 1 element in the LinkedList
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    this.head = this.head.next;
  }

  // delete from end of LinkedList
  deleteTail() {
    if (!this.tail) {
      return;
    }
    // only 1 element in the LinkedList
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
    secondLastNode.next = null;
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
    const data = treeify.asTree(this.head, true, true);
    console.log(data);
  }
}

const list = new SinglyLinkedList();

// Testing appending values
list.append("is");
list.append("a");
list.append("Singly");
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
const node = list.search("a");
console.log("Searched node : \n");
console.log(treeify.asTree(node, true, true));

// Creating a Singly LinkedList from an array

const input = [1, 2, 3, 4, -5, 6, -7, 8, 9, -10];
console.log(
  "Singly LinkedList from array [" + input + "] looks like below: \n",
);
const listFromArray = new SinglyLinkedList();
input.forEach((val) => {
  listFromArray.append(val);
});
listFromArray.printList();
