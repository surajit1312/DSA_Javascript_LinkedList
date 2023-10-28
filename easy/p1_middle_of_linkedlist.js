console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ LeetCode 876. Middle of the Linked List ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
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

  // print the LinkedList
  printList() {
    const data = treeify.asTree(this.head, true, true);
    console.log(data);
  }
}

var middleNode = function (head) {
  // In case of no elements
  if (!head) {
    return;
  }
  // In case of only one element
  if (!head.next) {
    return head;
  }
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Creating a Singly LinkedList from an array
const input = [1, 2, 3, 4, -5, 6, -7, 8, 9, -10];
console.log(
  "Singly LinkedList from array [" + input + "] looks like below: \n"
);
const listFromArray = new SinglyLinkedList();
input.forEach((val) => {
  listFromArray.append(val);
});
listFromArray.printList();

const middleOfLinkedList = middleNode(listFromArray.head);
console.log("Middle of Singly LinkedList is below: \n");
console.log(treeify.asTree(middleOfLinkedList, true, true));
