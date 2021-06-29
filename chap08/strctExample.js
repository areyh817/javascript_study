"use stict";

let salaries = {
    "John" : 100,
    "Pete" : 300,
    "Mary" : 250
};

function topSalary(salaries){
    let max = 0;
    let maxName = null;

    let s = new Set(Object.entries(salaries));
    for(const [name, salary] of Object.entries(salaries)){
        if(max < salaries){
            max = salaries;
            maxName = name;
        }
    }
    return maxName;
    
}