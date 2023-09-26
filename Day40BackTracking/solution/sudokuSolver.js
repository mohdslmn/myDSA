
function solve(board){
    let n = board.length;
    let row =  -1;
    let col = -1;
    let emptyLeft = true;

    // this is how we are replacing the r,c from arguments
    for(let i = 0; i < n ; i++){
        for(let j = 0 ; j < n; j++){
            if(board[i][j] === 0){
                row = i;
                col = j;
                emptyLeft = false;
                break;
            }
        }
        //if you find empty element in the row,then break
        if(emptyLeft === false){
            break;
        }
    }
    if(emptyLeft === true){
        return true; 
        //means sudoku is solved
    }

    //backtrack

    for(let num = 1 ; num <= 9 ; num++){
        if(isSafe(board,row,col,num)){
            board[row][col] = num;

            if(solve(board)){
                //found answer
                return true;
            }
            else{
                //backtrack
                board[row][col] = 0;
            }
        }
    }
    return false;
}
function isSafe(board, row , col , num){
    //check the row
    for(let i = 0; i < board.length ; i++){
        //check if the number is in the row
        if(board[row][col] === num){
            return false;
        }
    }
    // check the col
    for(let nums of board){
        //check if the number is in the col
        if(nums[col] === num){
            return false;
        }
    }

    // for each matrix 3*3
    let sqrt = Math.sqrt(board.length);
    let rowStart = row -  row % sqrt;
    let colStart = col - col % sqrt;

    for(let r = rowStart; r < rowStart + sqrt ; r++){
        for(let c = colStart ; c < colStart + sqrt ; c++){
            if(board[r][c] === num){
                return false;
            }
        }
    }
    return true;
}
function display(board){
    for(let row of board){
        for(let num of row ){
            // console.log(num + " ");
            process.stdout.write(num +" ");
        }
        console.log(); 
    }
}

const  board = [ [3, 0, 6, 5, 0, 8, 4, 0, 0],
[5, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 8, 7, 0, 0, 0, 0, 3, 1],
[0, 0, 3, 0, 1, 0, 0, 8, 0],
[9, 0, 0, 8, 6, 3, 0, 0, 5],
[0, 5, 0, 0, 9, 0, 6, 0, 0], 
[1, 3, 0, 0, 0, 0, 2, 5, 0],
[0, 0, 0, 0, 0, 0, 0, 7, 4],
[0, 0, 5, 2, 0, 6, 3, 0, 0] ];

if(solve(board)){
    display(board)
}
else{
console.log("cannot solve");
}

// 3 1 6 5 2 8 4 2 6 
// 5 2 9 1 3 4 5 9 7
// 4 8 7 6 7 9 8 3 1
// 2 4 3 4 1 2 7 8 2
// 9 6 1 8 6 3 9 1 5
// 7 5 8 7 9 5 6 4 3
// 1 3 2 3 4 1 2 5 8 
// 6 7 4 9 5 7 1 7 4
// 8 9 5 2 8 6 3 6 9