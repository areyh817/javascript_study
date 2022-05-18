function dedupe(arr){
    let res = [];
    
    if(arr.length == 0) return res;
    res.push(arr[0]);

    for(let i = 1; i < arr.length; i++){
        if(arr[i] != arr[i - 1]){
            res.push(arr[i]);
        }
    }




    return res;
}