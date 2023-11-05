console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ LeetCode 21. Merge Two Sorted Lists    ~~~~~~~~~~~~~~~~~~~~~~~~~~~",
);

/**
 *
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/
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

  // print the LinkedList
  printList() {
    const data = treeify.asTree(this.head, true, true);
    console.log(data);
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *
 * List 1 = [ 1   2      4]                 --> l1
 *            |  / \    / \
 *            |/    \ /    \
 * List 2 = [ 1     3      4 ---- 6]        --> l2
 */
var mergeTwoLists = function (list1, list2) {
  if (!list2) {
    return list1;
  }
  if (!list1) {
    return list2;
  }
  if (list1.val > list2.val) {
    // swap the list to point l1 to the list with smallest head value
    let temp = list2;
    list2 = list1;
    list1 = temp;
  }
  const merged = list1;
  while (list1 && list2) {
    let dummyNode = null;
    while (list1 && list1.val <= list2.val) {
      dummyNode = list1;
      list1 = list1.next;
    }
    dummyNode.next = list2;
    // swap the list to point l1 to the list with smallest head value
    let temp = list2;
    list2 = list1;
    list1 = temp;
  }
  return merged;
};

// Creating a Singly LinkedList 1 from an array
const list1 = [1, 2, 4];
console.log(
  "Singly LinkedList 1 from array [" + list1 + "] looks like below: \n",
);
const listFromArray1 = new SinglyLinkedList();
list1.forEach((val) => {
  listFromArray1.append(val);
});
listFromArray1.printList();

// Creating a Singly LinkedList 2 from an array
const list2 = [1, 3, 4, 6];
console.log(
  "Singly LinkedList 2 from array [" + list2 + "] looks like below: \n",
);
const listFromArray2 = new SinglyLinkedList();
list2.forEach((val) => {
  listFromArray2.append(val);
});
listFromArray2.printList();

const mergedLinkedList = mergeTwoLists(
  listFromArray1.head,
  listFromArray2.head,
);
console.log("Merged Sorted LinkedList is below: \n");
console.log(treeify.asTree(mergedLinkedList, true, true));
