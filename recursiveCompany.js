"use strict";
let company = {
    sales : [{name : 'John', salary : 1000}, {name : 'Alice', salary : 1600}],
    development : {
        sitest : [{name : 'peter', salary : 2000}, {name : 'Alex', salary : 1800}],
        internals : [{name : 'Jack', salary : 1300}]
    }
};

// 급여 합계를 구해주는 함수 
function sumSalaries(department){
    if(Array.isArray(department)){  // 첫번째 경우
        // 배열의 요소를 합함
        // reduce() method는 배열 요소마다 함수를 호풀해 누적된 값을 구할 수 있는 method이다.
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for(let sudbep of Object.values(department)){
            sum += sumSalaries(sudbep); // 재귀 호출로 각 하위 부서 임직원의 급여, 총합을 구함
        }
        return sum;
    }
}
console.log(sumSalaries(company));  // 7700