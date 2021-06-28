'use strict';

const studentsData = require('../tests/dataSet');

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

  push(value) {
    let tree = this.root;
    if (!tree) {
      this.root = new Node(value);
      return;
    }
    function recurse(tree) {
      if (value < tree.value) {
        if (!tree.left) {
          tree.left = new Node(value);
          return;
        } else recurse(tree.left);
      } else if (!tree.right) {
        tree.right = new Node(value);
        return;
      } else recurse(tree.right);
    }

    recurse(tree); //recurse(this);
  }

  doBalanced() {
    function maxDepth(root) {
      if (!root) return 0;
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    let subtreeDifference = root => maxDepth(root.left) - maxDepth(root.right);

    function recursion(root) {
      let newRoot, node, r, difference;
      if (root !== null) {
        root.left = recursion(root.left);
        root.right = recursion(root.right);
        if (Math.abs((difference = subtreeDifference(root))) >= 2) {
          if (difference > 0) {
            if (root.left.right) {
              r = root.left;
              newRoot = r.right;
              node = r.right.right;
              r.right = r.right.left;
              newRoot.left = r;
              root.left = node;
              newRoot.right = root;
              root = newRoot;
            } else {
              newRoot = root.left;
              root.left = null;
              newRoot.right = root;
            }
          } else {
            if (root.right.left) {
              r = root.right;
              newRoot = r.left;
              node = r.left.left;
              r.left = r.left.right;
              newRoot.right = r;
              root.right = node;
              newRoot.left = root;
            } else {
              newRoot = root.right;
              root.right = null;
              newRoot.left = root;
            }
          }
          root = newRoot;
        }
      }
      return root;
    }

    return recursion(this.root);
  }

  printTree() {
    function recursion(tree) {
      if (tree !== null) {
        recursion(tree.left);
        console.log(tree.value);
        recursion(tree.right);
      }
    }

    recursion(this.root);
  }
}

let bstTime = new BinarySearchTree();
[50, 40, 42, 43, 41, 30, 51, 52, 53, 54].forEach(value => {
  bstTime.push(value);
});
// [50, 48, 49, 60, 59, 58].forEach(value => {
//   bstTime.push(value);rotate
// });
// [50, 51, 52].forEach(value => {
//   bstTime.push(value);
// });
// [50, 48,47, 46, 45].forEach(value => {
//   bstTime.push(value);
// });
// [50, 46, 48, 45, 47, 49].forEach(value => {
//   bstTime.push(value);
// });
// [50, 46, 48, 45, 47, 49].forEach(value => {
//   bstTime.push(value);
// });

bstTime = bstTime.doBalanced();
console.dir(`bstTime`);
console.log(bstTime);
