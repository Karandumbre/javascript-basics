class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.print();
list.delete(3);
list.print();
