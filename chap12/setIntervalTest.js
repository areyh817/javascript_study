"use strict";

// setInterval
function fromto(from, to){
    
    let start = from;

    let timerId = setInterval(()=> {
        console.log(start)
        if(start == to){ clearTimeout(timerId); }
        start++;
    
    }, 1000);
}

// setTimeout
function fromto(from, to){

    let current = from;

    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
}

fromto(5, 20);