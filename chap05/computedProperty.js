"use strict";

let stationary = prompt("어떤 학용품을 구매하시겠습니까?");

let bag = {
    [stationary] : 10
};

alert(bag[stationary]);

let cnt = +prompt("몇 개 더 구입하시겠습니까 ?");

bag[stationary] += cnt;
alert(bag[stationary]);


