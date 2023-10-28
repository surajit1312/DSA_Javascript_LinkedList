console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ LeetCode 206. Reverse Linked List ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

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

  // print the LinkedList
  printList() {
    const data = treeify.asTree(this.head, true, true);
    console.log(data);
  }
}

/**
 * Original linkedlist  null -> 1 -> 2 -> 3 -> 4 -> 5 -> null
 * dummy -> null
 * head -> 1
 * 1st iteration ->
 *     next = head.next
 *     head.next = dummy
 *     dummy = head
 *     head = next
 * 2nd iteration ->
 *     next = head.next
 *     head.next = dummy
 *     dummy = head
 *     head = next
 * and so on ... till head points to null
 * @param {*} head
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dummyNode = null;
  while (head) {
    let next = head.next;
    head.next = dummyNode;
    dummyNode = head;
    head = next;
  }
  return dummyNode;
};

// Creating a Singly LinkedList from an array
const input = [1, 2, 3, 4, 5];
console.log(
  "Singly LinkedList from array [" + input + "] looks like below: \n"
);
const listFromArray = new SinglyLinkedList();
input.forEach((val) => {
  listFromArray.append(val);
});
listFromArray.printList();

const reversedLinkedList = reverseList(listFromArray.head);
console.log("Reversed LinkedList is below: \n");
console.log(treeify.asTree(reversedLinkedList, true, true));
