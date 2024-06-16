// Definition of a linked list node
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to reverse a linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Store the next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev and current one step forward
    current = next;
  }
  return prev; // prev is the new head of the reversed list
}

// Example usage:
// Creating a linked list 1->2->3->null
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// Reversing the linked list
let newHead = reverseLinkedList(head);

// Printing the reversed linked list
let current = newHead;
while (current != null) {
  console.log(current.value);
  current = current.next;
}
