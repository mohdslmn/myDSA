 var maxOccurence = function(str){

    if(str === ""){
        return "";
    }
let map = new Map();
let max = 0 ;
let ans;
 str.split("").forEach(element => {
    map[element] = map[element] ? map[element] + 1 : 1 ;
    //console.log(map);
 
    max = max < map[element] ?  max = map[element] : max ;
  
 });

 return max;




 };
 console.log(maxOccurence("geeksforgeeks"));//4