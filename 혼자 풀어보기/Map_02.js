let john = {name : "John"};

// 고객의 가게 방문 횟수를 세본다고 가정해 봅시다.
let visitsCountMap = new Map();

// john을 맵의 키로 사용해보기
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));
