Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @pskushw
 Sign out
 Unwatch 1
  Star 0  Fork 0 pskushw/dataStructureAndAlgorithm
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
Branch: master Find file Copy pathdataStructureAndAlgorithm/reverseLinkedList.js
ae0f186  16 seconds ago
@pskushw pskushw Create reverseLinkedList.js
1 contributor
RawBlameHistory     
58 lines (50 sloc)  927 Bytes


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
