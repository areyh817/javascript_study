function solution(arr){
    let cnt = 0;
    let res = [];

    if(arr.length == 0) return res;
    res[0] = ([arr[0], 1]);

    for(let i = 1; i < arr.length; i++){
        if(arr[i] == arr[i - 1]){
            cnt++;
        } else {
            res.push([arr[i], cnt]);
            cnt = 0;
        }
    }

    return res;


    
}