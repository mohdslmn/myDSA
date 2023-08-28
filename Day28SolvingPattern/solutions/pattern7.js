
function pattern7(n){
    for(let row = 1 ; row < 2 * n ; row++){
        let pattern = '';
        let totalColsInRows = row > n ? (2*n) - row : row ; 
        for(let col = 1 ; col < totalColsInRows ; col++){
            pattern += "*";

        }
        console.log(pattern);
    }
};
pattern7(5);