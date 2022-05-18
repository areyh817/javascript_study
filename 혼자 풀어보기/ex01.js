function distinct(arr){

    let set = new Set();
    let res = [];
    
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i]) == false){
            set.add(arr[i]);
            res.push(arr[i]);
        } 
        
    }

    return res;

}
