class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let previous = current;
    while (current.next) {
      [previous, current] = [current, current.next];
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return previous;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.tail = newHead;
    } else {
      newHead.next = this.head;
    }
    this.head = newHead;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let returnVal = this.head;
    for (let i = 0; i < index; i++) {
      returnVal = returnVal.next;
    }
    return returnVal;
  }
  set(index, val) {
    const setNode = this.get(index);
    if (setNode) {
      setNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const insertNode = new Node(val);
    const previousNode = this.get(index - 1);
    insertNode.next = previousNode.next;
    previousNode.next = insertNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const previousNode = this.get(index - 1);
    const removeNode = previousNode.next;
    previousNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }
  reverse() {
    let current = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let next;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();

list.unshift(2);
console.log(list);

list.push(5);
console.log(list);

list.push(3);
console.log(list);

list.push(10);
console.log(list);

list.reverse();
console.log(list);

console.log(list.get(1));

// list.remove(0);
// console.log(list);

// list.remove(0);
// console.log(list);


// list.shift();
// console.log(list);

// console.log(list);
