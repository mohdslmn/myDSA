
var setZeroes = function(matrix) {
    let zeroPos=[];
    //declare an empty 2D-array that will store the position at which element with zero value is found
    for(let i=0;i<matrix.length;i++){//traverses through rows
        for(let j=0;j<matrix[0].length;j++){//traverses through columns
            if(matrix[i][j] === 0){//if the value of element is 0
                zeroPos.push([i,j]);//push the index of the row and col in it
            }
        }
    }
    for(let i = 0; i < zeroPos.length; i++){ //traverse through all elemnts of zeroPos
        const [rows,cols] = zeroPos[i];
        //if [1,2] then rows = 1 & cols = 2
        for(let i = 0 ; i < matrix.length;i++){ //traverse through rows
            matrix[i][cols] = 0; //where cols = 1 update it to 0

        }
        for(let i = 0; i < matrix[0].length; i++){//traverse through all cols
            matrix[rows][i] = 0; // where row = 1 , update it to 0
        }

    }
   // console.log(matrix);
   return matrix;

};

const arr = [[0,1,0], [1,1,1],[1,1,1]];
console.log(setZeroes(arr)); // [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ] ]

//TC : O(m*n


//SC : O(m*n)