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
}

const tree = new BinarySearchTree();

tree.insert(5);

tree.insert(13);

tree.insert(2);

tree.insert(7);

tree.insert(3);

console.log(tree.find(1));
