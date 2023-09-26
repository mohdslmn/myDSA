
function knight(board , row , col ,knights){

    //base case 
    if(knights === 0 ){
        display(board);
        console.log();
        return;
    }

    //Out of bound
    if(row === board.length - 1 && col === board.length){
        //just skip cant do anything
        return;
    }
    //making recursion for if you reach at end of column
    //try for next line
    if(col === board.length){
        knight(board ,row + 1 , 0 , knights);
        return;
    }

    if(isSafe(board , row , col)){
        board[row][col] = true;
        knight(board , row , col + 1, knights - 1);
        board[row][col] = false;
    }
    knight(board, row , col + 1, knights);

}
function isSafe(board,row,col){
    if(isValid(board,row - 2,col - 1)){
        if(board[row - 2][col - 1]){
            return false;
        }
    }
    if(isValid(board,row - 1,col - 2)){
        if(board[row - 1][col - 2]){
            return false;
        }
    }
    if(isValid(board,row - 2,col + 1)){
        if(board[row - 2][col + 1]){
            return false;
        }
    }
    if(isValid(board,row - 1,col + 2)){
        if(board[row - 1][col + 2]){
            return false;
        }
    }
    return true;
}
function isValid(board , row , col){
    if(row >= 0 && row < board.length && col >= 0 && col < board.length){
        return true;
    }
    return false;
}
function display(board){

    for(let row of board){
        for(let elem of row){
            if(elem){
                // console.log("Q ");  //`[${arr.join(', ')}]`
                process.stdout.write("K ");
            }
            else{
                // console.log("X ");
                process.stdout.write("X ");
            }
        }
        console.log();
        // console.log();
    }
}
const n = 4;
const board =  Array.from({ length: n }, () => Array(n).fill(null));

knight(board,0,0,4);

// Output:

// K K K K 
// X X X X 
// X X X X 
// X X X X 

// K K K X 
// X K X X 
// X X X X 
// X X X X 

// K K K X 
// X X X X 
// X X X X 
// K X X X

// and so on .....
