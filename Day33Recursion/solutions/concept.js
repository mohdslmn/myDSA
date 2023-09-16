//diff b/w n-- and --n
function concept(n){
    if(n === 0){
        return ;
    }
    console.log(n);
    //if we pass n-- output will be 555.... only and end with stack overflow bcoz n-- first print the number then substract and --n first substract the no. then print
    concept(--n);
}
concept(5);