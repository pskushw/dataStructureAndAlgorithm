
/* Time complexity : O(m+n)O(m+n)
Space complexity : O(1)O(1) */

function findIntersection(listA,listB) {
  var l1 = listA;
  var l2 = listB;
  if(!l1 || !l2) {
    return null;
  }
    
  while(l1 !== 12){
      l1 = l1.next;
      l2 = l2.next;
      if(l1 === l2) {
        return l1.val;
      }
      if (!l1) l1 = listB;
      if (!l2) l2 = listA;
  }
    
  return l1.val;
}


/* Example */

var commonList = { 
                  val : 4,
                  next : {
                    val : 5,
                      next: {
                        val : 6
                      }
                  }
                 }
var list1 = { 
              val : 1,
              next : {
                val : 2,
                next: {
                  val : 3,
                  next: commonList
                }
              }
            }
 var list2 = {
                 val : 22,
                  next: {
                      val : 33,
                       next: commonList
                     }
                  }
                  
 console.log(findIntersection(list1,list2));
