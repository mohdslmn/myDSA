var findFinalValue = function(arr,original){
        const seen = new Set(arr);

        while(seen.has(original))  original = 2 * original;

        return original;
}
const arr = [5,3,6,1,12];
console.log(findFinalValue(arr,3)); // 24

const arr2 = [2,7,9];
console.log(findFinalValue(arr,4)); //4
