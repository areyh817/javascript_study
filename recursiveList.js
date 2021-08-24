"use strict";

let list = { value : 1 };
list.next = { value : 2 };
list.next.next = { value : 3 };
list.next.next.next = { value : 4 };
list.next.next.next.next = null;

// 120
function sumTo(n){
    if(n == 1) return 1;
    return n + sumTo(n - 1);
}
console.log(sumTo(100));


// 5050
function factorial(n){
    return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));


// list 출력
function printList(list) {
    
    // 가장 단순화한 값을 출력
    console.log(list.value);
    if(list.next) printList(list.next); 
  
  }
  
  printList(list);
