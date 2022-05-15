"use strict";

let list = ["A", "B", "C"];

let fn = function(item, list, index){
    console.log(item+":"+index+":"+list);
}

list.forEach(fn);


// 요즘은 밑에거 많이씀.
list.forEach((item, index, list) =>{
    console.log(item+":"+index+":"+list);
})

