function solution(tel){
    let len = tel.length; 
    let answer;
    
    for(let i = 0; i < len; i++){
        if(i < len - 4) answer += '*';
        else answer += tel[i];
    }
    
    return answer;
}

console.log(solution("01012345678"));