'use strict';

let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18)?
() => alert('안녕'):
() => alert("안녕하세여");

welcome();