
var rightHalfPyramidAlphabet = function(n){

        for(let row = 0 ; row <= n ; row++) {
            //taking empty string to concatenate
            let pattern = "";
            for(let col = 0; col <= row ; col++){
                //concatenating Alphabets by unicode for every row
                pattern += String.fromCharCode(65 + col);
                
                
            }
            //printing each row
            console.log(pattern);
     

        } 
};

rightHalfPyramidAlphabet(5); // for alphabets

var rightHalfPyramidAstric = function(n){

    for(let row = 0 ; row <= n ; row++) {
        //taking empty string to concatenate
        let pattern = "";
        for(let col = 0; col <= row ; col++){
            //concatenating * for every row
            pattern += "*";
            
            
        }
        //printing each row
        console.log(pattern);
 

    } 
};
rightHalfPyramidAstric(5);

var rightHalfPyramidAstricNumbers = function(n){

    for(let row = 0 ; row <= n ; row++) {
        //taking empty string to concatenate with numbers
        let pattern = "";
        for(let col = 1; col <= row ; col++){
            //concatenating column count itself for every row
            pattern += col;
            
            
        }
        //printing each row
        console.log(pattern);
 

    } 
};

rightHalfPyramidAstricNumbers(5)

