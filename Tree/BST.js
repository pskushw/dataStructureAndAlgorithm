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

BST.prototype.inorderTraverse = function(node) {
  if(!node) {
    return;
  }
  this.inorderTraverse(node.left);
  console.log(node.value);
  this.inorderTraverse(node.right);
}

BST.prototype.preorderTraverse = function(node) {
  if(!node) {
    return;
  }
  console.log(node.value);
  this.preorderTraverse(node.left);
  this.preorderTraverse(node.right);
}

BST.prototype.postorderTraverse = function(node) {
  if(!node) {
    return;
  }
  this.postorderTraverse(node.left);
  this.postorderTraverse(node.right);
  console.log(node.value);
}

BST.prototype.minNode = function(node) {
  if(!node) {
    return 0;
  } 
  if(node.left) {
    return this.minNode(node.left);
  }
  return node.value;
}

BST.prototype.maxNode = function(node) {
  if(!node) {
    return 0;
  }
  if(node.right) {
   return this.maxNode(node.right);
  }
  return node.value;
}

BST.prevNode = null;
BST.prototype.isBSTInorder = function(root) {
  if (root) {
	this.isBSTInorder(root.left);
	if (this.prevNode != null && this.prevNode.value >= root.value) {
		return false;
	}
	this.prevNode = root;
	this.isBSTInorder(root.right);
	}
 return true;
}

BST.prototype.search = function(Node,data) {
  var currentNode = Node;
  if(currentNode){
    if(data == currentNode.value){
      return "present";
    }else if( data <= currentNode.value) {
      return this.search(currentNode.left,data);
    }else if( data >= currentNode.value) {
      return this.search(currentNode.right,data);
    }
  }
  return "not Present";
}
BST.prototype.searchIterative = function(node,data) {
  if(!node) {
    return "not present";
  }
  var queue = [node];
    while(queue.length) {
     var n = queue.shift();
     console.log(n);
     if(n.value === data) {
      return "present";
     }
      if(n.left) {
       queue.push(n.left);
     }
     if(n.right) {
       queue.push(n.right);
     } 
   }
 return "not present";
}
var bst = new BST();
bst.push(25);
bst.push(15);
bst.push(50);
bst.push(10);
bst.push(22);
bst.push(35);
bst.push(70);
bst.push(4);
bst.push(12);
bst.push(18);
bst.push(24);
bst.push(31);
bst.push(44);
bst.push(66);
bst.push(90);
bst.inorderTraverse(bst.root);
bst.preorderTraverse(bst.root);
bst.postorderTraverse(bst.root);
console.log(bst.search(bst.root,5));
