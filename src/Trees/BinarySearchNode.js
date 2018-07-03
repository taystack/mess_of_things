export default class BSTNode {
  constructor(val) {
    this.val = val;
    this.lhs = null;
    this.rhs = null;
  }

  get length() {
    let cnt = 0;
    this.orderTraverse(function() {
      cnt ++;
    });
    return cnt;
  }

  get isLeaf() {
    return this.lhs === null && this.rhs === null;
  }

  get hasOneChild() {
    return ((this.rhs && !this.lhs) || (this.lhs && !this.rhs));
  }

  get min() {
    let node = this;
    while (node.lhs) {
      node = node.lhs;
    }
    return node.val;
  }

  get max() {
    let node = this;
    while (node.rhs) {
      node = node.rhs;
    }
    return node.val;
  }

  toString() {
    const left = this.lhs === null ? "null" : this.lhs.val;
    const right = this.rhs === null ? "null" : this.rhs.val;
    return `val: ${this.val}, lhs: ${left}, rhs: ${right}`;
  }

  toArray(arr = []) {
    this.orderTraverse(function(node) {
      arr.push(node.val);
    });
    return arr;
  }

  orderTraverse(fn) {
    if (this.lhs) {
      this.lhs.orderTraverse(fn);
    }
    fn(this);
    if (this.rhs) {
      this.rhs.orderTraverse(fn);
    }
  }

  reverseTraverse(fn) {
    if (this.rhs) {
      this.rhs.reverseTraverse(fn);
    }
    fn(this);
    if (this.lhs) {
      this.lhs.reverseTraverse(fn);
    }
  }

  insert(val) {
    if (val === this.val) return false;
    if (val < this.val) {
      if (this.lhs === null) {
        this.lhs = new BSTNode(val);
      } else {
        return this.lhs.insert(val);
      }
    } else {
      if (this.rhs === null) {
        this.rhs = new BSTNode(val);
      } else {
        return this.rhs.insert(val);
      }
    }
    return true;
  }

  remove(val) {
    // if (this.lhs === val) {
    //   if (this.lhs.isLeaf) {
    //     delete this.lhs;
    //     this.lhs = null;
    //   } else if (this.lhs.hasOneChild) {
    //     if (this.lhs.lhs) {
    //       this.lhs.val = this.lhs.lhs.val;
    //       this.lhs.lhs = this.lhs.lhs.lhs;
    //       this.rhs.rhs = this.rhs.rhs.rhs;
    //     }
    //     else if (this.lhs.lhs) {
    //       this.lhs.val = this.lhs.lhs.val;
    //       this.lhs.lhs = this.lhs.lhs.lhs;
    //       this.rhs.rhs = this.rhs.rhs.rhs;
    //     }
    //   }
    // } else if (this.rhs === val) {
    //   if (this.rhs.isLeaf) {
    //     delete this.rhs;
    //     this.rhs = null;
    //   }
    // } else if (this.rhs.hasOneChild) {
    //
    // }
  }

  find(val) {
    if (val === this.val) return this;
    if (val < this.val) {
      return this.lhs.find(val, this);
    } else {
      return this.rhs.find(val, this);
    }
  }

  displayNodes() {
    this.orderTraverse(node => (console.log(node.val)));
  }
}
