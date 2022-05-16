let cnt = 4;
let list = [1, 2, 3, 4, 5];
let res = [];

for(let i = 0; i < list.length; i+=cnt){
    res.push(list.slice(i, i + cnt));
}

console.log(res);