function findIntersectionByLengthDiff(listA,listB) {
  var l1 = listA;
  var l2 = listB;
  var l1length = 0;
  var l2length = 0;
  var lengthDiff = 0;
  if(!l1 || !l2) {
    return null;
  }
  
  while(l1.next) {
    l1length++;
    l1 = l1.next;
    
  }
  while(l2.next) {
    l2length++;
    l2 = l2.next;
    
  }
  if(l1length > l2length) {
      lengthDiff = l1length-l2length;
      var i = 0;
      while(i < lengthDiff){
        listA = listA.next;
        i++
      }
  }else if( l2length > l1length){
      lengthDiff = l2length - l1length;
      var j = 0;
      while(j < lengthDiff){
        listB = listB.next;
        j++
      }
  }
  
   while(listA !== listB ){
     listA = listA.next;
     listB = listB.next; 
  }
  return listA.val;

}
