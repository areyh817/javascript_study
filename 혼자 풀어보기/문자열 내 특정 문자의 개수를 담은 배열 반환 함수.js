// 문자열 내 특정 문자의 개수를 담은 배열 반환 함수

function solution(str, ch){
    let res = [];
    for(let i = 0; i < ch.length; i++) res[i] = 0;

    for(let i = 0; i < ch.length; i++){
        for(let j = 0; j < str.length; j++){
            if(str[j] == ch[i]) {
                res[i]++;
        }
    }

    }

    /*for(let i = 0; i < ch.length; i++){
        res[i] = str.split(ch[i]).length -1;
    }

    return res;*/
    return res;
}

console.log( solution("aabbbcddddee", ["a", "d"]) ); // [2, 4]
console.log( solution("AabbbcDDddee", ["a", "d"]) ); // [1, 2]