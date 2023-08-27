var pattern5 = function(n){
    for(let row = 1; row <= (2 * n ) + 1; row++){
        let pattern = '';
        //calculating total no. of rows when row > n
        let totalColsInRows = row > n ? 2 * n - row : row;

        for(let col = 1 ; col <= totalColsInRows; col++){
            pattern += "*";
        }
        console.log(pattern);
    }
  

};
pattern5(5);

