/*
맵이 주어졌을 때, 키-값을 반대로 가지는 맵을 만들어보자. {"a": "A"} => {"A": "a"}  
*/
function swapKeyValue(m) {
    const r = new Map();
    for(const e of m.entries()) r.set(e[1], e[0]);
    return r;
    }
    
    const map = new Map();
    map.set(new Date(), 1234);
    map.set("Hello", { world: "world" });
    swapKeyValue(map);