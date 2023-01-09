/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let stack = [this.root];
    let totalInt = 0;

    while (stack.length) {
      let curr = stack.pop();
      if (curr) {
        totalInt += curr.val;
        for (let child of curr.children)
          stack.push(child);
      } 
    }
    return totalInt;
  }

  /**
   * countEvens(): count all of the nodes in the tree with even values. 
   * - using a recursive method -
   * */

  countEvens() {
    if (!this.root) return 0;
    let totalEven = (this.root.val % 2 === 0) ? 1 : 0;
    
    function addEven(node) {
      // traverse all children of node
      for (let child of node.children) {
        // count evens if found in child
        if (child.val % 2 === 0) totalEven += 1;
        // if child has any children
        if (child.children) addEven(child);
      }
    }
    addEven(this.root);
    return totalEven;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = (this.root.val > lowerBound) ? 1 : 0;

    function addGreater(node) {
      // traverse all children of node
      for (let child of node.children) {
        // count all values greater than lowerBound
        if (child.val > lowerBound) count++;
        // check for nested children
        if (child.children) addGreater(child);
      }
    }
    addGreater(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
