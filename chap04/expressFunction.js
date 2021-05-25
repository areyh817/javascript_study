'use strict';

let a = function(){
    alert("Hello");
}
a();
alert(a);

let b = a;
let c = a;
b();
c();