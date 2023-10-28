console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ LeetCode 141. Linked List Cycle ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/**
 *
 * Link: https://leetcode.com/problems/linked-list-cycle/
 */

const treeify = require("treeify");

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // add element at the end of LinkedList
  append(data) {
    const newNode = new ListNode(data);
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

  // search an element in the LinkedList
  search(data) {
    if (!this.head) {
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === data) {
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

  createCycle(valFrom, valTo) {
    const fromNode = this.search(valFrom);
    const toNode = this.search(valTo);
    fromNode.next = toNode;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

// Creating a Singly LinkedList 1 from an array
console.log("\nInput1: ");
const list1 = [3, 2, 0, -4];
console.log(
  "Singly LinkedList 1 from array [" + list1 + "] looks like below: \n"
);
const listFromArray1 = new SinglyLinkedList();
list1.forEach((val) => {
  listFromArray1.append(val);
});
listFromArray1.createCycle(-4, 2);
listFromArray1.printList();

console.log("\nFor Input 1");
console.log("The linked list has a cycle : " + hasCycle(listFromArray1.head));

// Creating a Singly LinkedList 2 from an array
console.log("\nInput2: ");
const list2 = [1, 3, 4, 6];
console.log(
  "Singly LinkedList 2 from array [" + list2 + "] looks like below: \n"
);
const listFromArray2 = new SinglyLinkedList();
list2.forEach((val) => {
  listFromArray2.append(val);
});
listFromArray2.printList();

console.log("\nFor Input 2");
console.log("The linked list has a cycle : " + hasCycle(listFromArray2.head));
