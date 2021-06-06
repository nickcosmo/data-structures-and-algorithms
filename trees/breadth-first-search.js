class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let next = this.root;
      while (true) {
        if (newNode.value === next.value) return undefined;
        if (newNode.value < next.value) {
          if (next.left) {
            next = next.left;
          } else {
            next.left = newNode;
            break;
          }
        } else {
          if (next.right) {
            next = next.right;
          } else {
            next.right = newNode;
            break;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    if (!this.root) return false;

    let checkNode = this.root;

    function checkVal(val, node) {
      if (val === node.value) return true;
      if (node.right === null && node.left === null) return false;
      if (val < node.value) {
        if (node.left) {
          return checkVal(val, node.left);
        }
        return false;
      } else if (val > node.value) {
        if (node.right) {
          return checkVal(val, node.right);
        }
        return false;
      }
    }
    return checkVal(value, checkNode);
  }

  findIterative(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    //breadth first search
    if (!this.root) return null;
    let queue = [],
      values = [];

    let current = this.root;
    queue.push(current);

    while(queue.length > 0) {
      current = queue.shift();
      values.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }

    }
    return values;
  }

  dfsPreOrder() {
    // depth first search pre order

    if (!this.root) return null;
    let current = this.root;
    let values = [];

    function traverse(node) {
      values.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return values;
  }

  dfsPostOrder() {
    // depth first search post order

    if (!this.root) return null;
    let current = this.root;
    let values = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    }

    traverse(current);

    return values;
  }

  dfsInOrder() {
    // depth first search in order

    if (!this.root) return null;
    let current = this.root;
    let values = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return values;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);

tree.insert(6);

tree.insert(15);

tree.insert(3);

tree.insert(8);

tree.insert(20);

console.log("bfs", tree.bfs());

console.log("pre order", tree.dfsPreOrder());

console.log("post order", tree.dfsPostOrder());

console.log("in order", tree.dfsInOrder());