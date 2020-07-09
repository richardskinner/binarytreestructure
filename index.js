
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeStructure {
  constructor() {
    this.root = null;
    this.order = new Array();
  }
  insert(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else  {
      return this._searchTree(data, node);
    }
  }
  list() {
    if (this.root === null) {
      return null;
    } else {
      this._transverseInOrder(this.root);
      return this.order;
    }
  }
  leftOrRight(node = this.root) {
    if (node === null) {
      return 0;
    }

    let left =+ this.leftOrRight(node.left);
    let right =+ this.leftOrRight(node.right);

    return left > right ? "LEFT" : "RIGHT";
  }
  _searchTree(data, node) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        return this._searchTree(data, node.left)
      }
    }
    if (data > node.data) {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        return this._searchTree(data, node.right)
      }
    }
  }
  _transverseInOrder(node) {
    node.left && this._transverseInOrder(node.left);
    this.order.push(node.data);
    node.right && this._transverseInOrder(node.right);
  }
}

let BTS = new BinaryTreeStructure();

const structure = [14, 3, 19, 8, 40, 9, 12, 37, 33, 37, 33, 15, 21, 34, 1, 1];

structure.forEach(data => BTS.insert(data));

const ul = document.createElement('ul');

const items = BTS.list();

items.forEach(item => {
  const li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML = item;
});

const h3 = document.createElement("h3");
h3.innerHTML = "HIGHEST LEFT OR RIGHT: " + BTS.leftOrRight();


window.onload = function() {
  document.body.appendChild(ul);
  document.body.appendChild(h3);
}
