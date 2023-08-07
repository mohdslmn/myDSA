
var uniqueCounts = function(arr){
    let map = new Map();

    for(let i = 0; i < arr.length ; i++){
        let keys = arr[i];
        map.set(keys,0);
    
        
    }
    for(let i = 0; i < arr.length ; i++){
        let keys = arr[i];
        map.set(keys, map.get(keys) + 1);
    }
    let set = new Set();
    for(let values of map.values()){
        if(set.has(values)) return false;

        set.add(values);
    }
    
    return true;
    

};

const arr = [-1000,-999,-1000,3,3,3,1000,1000,1000];
console.log(uniqueCounts(arr));


/*
const pattern = "abba";
const s = "dog fish fish dog";
console.log(wordPattern(pattern , s));
*/