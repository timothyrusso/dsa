class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let prev = this.head;
    let temp = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unShift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const temp = this.head;
    this.head = this.head.next;

    temp.next = null; // remove the next property of the deleted element returned by the shift method
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }

      temp = temp.next;
    }
  }
}

const myLinkedList = new LinkedList(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(8);

console.log(myLinkedList.getLast());

// create a new node
// put the new node at the end of the linked list
// move the tail to the last node
