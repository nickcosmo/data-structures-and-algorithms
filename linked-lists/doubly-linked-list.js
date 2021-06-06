class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;

    const popNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.previous;
      this.tail.next = null;
      popNode.previous = null;
    }
    this.length--;
    return popNode;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.previous = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return null;

    let indexNode, count;

    if (index <= this.length / 2) {
      indexNode = this.head;
      count = 0;
      while (count !== index) {
        indexNode = indexNode.next;
        count++;
      }
    } else {
      indexNode = this.tail;
      count = this.length - 1;
      while (count != index) {
        indexNode = indexNode.previous;
        count--;
      }
    }
    return indexNode;
  }

  set(index, val) {
    const indexNode = this.get(index);
    if (indexNode) {
      indexNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index === 0) return !!this.unshift(val);

    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let indexNode = this.get(index);

    if (indexNode) {
      let previousNode = indexNode.previous;
      previousNode.next = newNode;
      indexNode.previous = newNode;
      newNode.previous = previousNode;
      newNode.next = indexNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let indexNode = this.get(index);

    if (indexNode) {
      let previousNode = indexNode.previous;
      let nextNode = indexNode.next;

      (previousNode.next = nextNode), (nextNode.previous = previousNode);

      indexNode.next = indexNode.previous = null;
      this.length--;
      return indexNode;
    }

    return undefined;
  }

  reverse() {
    if (!this.head) return null;

    let pointer1 = 0;
    let pointer2 = this.length - 1;
    while (pointer1 < pointer2) {
      let firstNode = this.get(pointer1);
      let lastNode = this.get(pointer2);

      [firstNode.val, lastNode.val] = [lastNode.val, firstNode.val];

      pointer1++;
      pointer2--;
    }
    return this;
  }
}

let list = new DoublyLinkedList();

list.push(12);

list.push(20);

list.push(13);

list.push(3);

list.push(2);

console.log("get", list.get(3));

console.log(list.reverse());

console.log("get", list.get(3));
