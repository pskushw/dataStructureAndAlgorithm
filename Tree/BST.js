function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BST(val) {
  this.root = null;
  if(val) {
    this.root = new Node(val);
  }
}

BST.prototype.push = function(val) {
  var root;
  if(!this.root) {
    this.root = new Node(val);
    return;
  }
  root = this.root;
  var currentNode = root;
  var newNode = new Node(val);
  while(currentNode) {
    if(val < currentNode.value) {
       if(!currentNode.left) {
         currentNode.left = newNode;
         return;
       }else {
         currentNode = currentNode.left;
       }
    }else {
      if(!currentNode.right) {
         currentNode.right = newNode;
         return;
       }else {
         currentNode = currentNode.right;
       }
    }
  }
}


var bt = new BST();
bt.push(10);
bt.push(2);
bt.push(1);
bt.push(20);
console.log(bt.root.right);
