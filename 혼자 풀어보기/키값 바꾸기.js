function change(m){
    const maptest = new Map();
    for(const e of m.entries()) maptest.set(e[1], e[0]);
    return maptest;
}

const map = new Map();
map.set("a", "A");
console.log(change(map));
