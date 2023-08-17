var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let ch of stones){
        if(jewels.includes(ch)){
            count++;
        }
    }
    return count;
};
const jewels = "aA", stones = "aAAbbbb" ;
console.log(numJewelsInStones(jewels,stones));