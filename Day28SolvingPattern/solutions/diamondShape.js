var pattern6 = function(n){
    for(let row = 1; row <= 2 * n + 1; row++){
        let pattern = '';
        let spaces = '';

        
        //calculating total no. of rows when row > n
        let totalColsInRows = row > n ? 2 * n - row : row;


        for(let k = 1 ; k <= (n - totalColsInRows) ; k++){
            spaces += " ";
        }
        for(let col = 1 ; col <= totalColsInRows; col++){
            pattern += " *";
        }
        console.log(spaces + pattern);
    }
  

};
pattern6(5);