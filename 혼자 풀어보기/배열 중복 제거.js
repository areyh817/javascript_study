function unique(values){

    // 간단하게 한 줄로 표현하는 방법
    return Array.from(new Set(values));

    // for문을 이용하는 방법
    let set = new Set();
    for(let i = 0; i < values.length; i++){

        set.add(values[i]);
    }
    return Array.from(set); 

}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));