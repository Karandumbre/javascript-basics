class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head; // Starts at the head
  let fast = head.next; // Starts one step ahead

  while (fast !== slow) {
    if (fast === null || fast.next === null) {
      return false; // No cycle if we reach the end
    }
    slow = slow.next; // Move slow by 1 step
    fast = fast.next.next; // Move fast by 2 steps
  }

  return true; // Cycle is detected if fast meets slow
}

// Example usage:
const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(head)); // Output: true
