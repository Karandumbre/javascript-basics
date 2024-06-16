class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal
  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left); // Visit left subtree
      console.log(node.data); // Visit root
      this.inorderTraversal(node.right); // Visit right subtree
    }
  }

  // Method to get the vertical order traversal as a map
  getVerticalOrder(node, hd, map) {
    if (node === null) {
      return;
    }
    map[hd] = (map[hd] || []).concat(node.data); // Add node to array at key 'hd' in map
    this.getVerticalOrder(node.left, hd - 1, map); // Go to left subtree
    this.getVerticalOrder(node.right, hd + 1, map); // Go to right subtree
  }

  // Method to count the number of vertical nodes
  countVerticalNodes() {
    let map = {};
    this.getVerticalOrder(this.root, 0, map);

    return Object.keys(map).length; // The number of keys in the map gives the number of vertical paths
  }

  // Pre-order traversal
  preorderTraversal(node) {
    if (node !== null) {
      console.log(node.data); // Visit root
      this.preorderTraversal(node.left); // Visit left subtree
      this.preorderTraversal(node.right); // Visit right subtree
    }
  }

  // Post-order traversal
  postorderTraversal(node) {
    if (node !== null) {
      this.postorderTraversal(node.left); // Visit left subtree
      this.postorderTraversal(node.right); // Visit right subtree
      console.log(node.data); // Visit root
    }
  }
}

let bt = new BinaryTree();
bt.insert(7);
bt.insert(4);
bt.insert(9);
bt.insert(1);
bt.insert(6);

console.log("In-Order Traversal:");
bt.inorderTraversal(bt.root); // Outputs the nodes in ascending order

console.log("Pre-Order Traversal:");
bt.preorderTraversal(bt.root); // Outputs the nodes starting from the root

console.log("Post-Order Traversal:");
bt.postorderTraversal(bt.root); // Outputs the nodes after visiting both subtrees

console.log("Vertical nodes");
console.log(bt.countVerticalNodes()); // Outputs the number of vertical paths in the tree
