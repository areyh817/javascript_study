function unique(arr){

    let namemap = new Set();
    
    for(let i = 0; i < arr.length; i++){

        namemap.add(arr[i]);
    }

    return Array.from(namemap);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );