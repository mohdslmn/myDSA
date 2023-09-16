
function countZeroes(n){
 return helper(n , 0);
}
function helper(n , count){
    if(n === 0){
        return count;
    }
    let rem = n%10;
    if(rem === 0){
        return helper(Math.floor(n/10),count + 1);
    }
    return helper(Math.floor(n/10) , count);
    

}
console.log(countZeroes(30204000));

