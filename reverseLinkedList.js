

function reverseListByIteration(list) {
  if(!list){
    return;
  }
  var cur = list;
  var next = null;
  var prev = null;
  while(cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  //if(!cur && prev){
    list = prev
  //}
 return list;
}

function reverseListByRecursion(cur,prev){
  var head = cur;
  if(cur) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    head = reverseListByRecursion(cur,prev);
  }
  
  if(!cur && prev){
    head = prev
  }
 return head;
   
}

 function traverse(list) {
  while(list){
    console.log(list.val);
    list = list.next;
    
  }
}
/* Example */
var list  = { 
              val : 1,
              next : {
                val : 2,
                next: {
                  val : 3
                }
              }
            }
//traverse(reverseListByIteration(list));
traverse(reverseListByRecursion(list));
