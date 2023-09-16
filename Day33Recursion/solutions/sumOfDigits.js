function sumOfDigits(n){
    if(n === 0){
        return 0;
    }
    //using Math.floor() for more precise calculation otherwise ans will be in decimal
    return (n%10) + Math.floor((sumOfDigits(n/10))) ;
}
console.log(sumOfDigits(1342));