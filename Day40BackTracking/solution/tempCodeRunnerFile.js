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