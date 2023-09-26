function queens(board , row){
    if(row === board.length){
        display(board);
        console.log();
        return 1;
    }
    let count = 0;
    //placing for queen and checking for every row & col
    for(let col = 0 ; col < board.length; col++){
        //place if it is safe not violating condition
        if(isSafe(board,row,col)){
            board[row][col] = true;
            //recursion call for checking another row like for 0,0 => 1,0 , 2,0 and so on
            count += queens(board,row + 1);
            //when we call out from fn call change it back to normal
            board[row][col] = false;
        }
    }
    return count;
}
function isSafe(board, row , col){
    //check vertical row
    for(let i = 0 ; i < row ; i++){
        //if there is queen
        if(board[i][col]){
            return false;
        }
    }
    //check diagonal left
    let maxLeft = Math.min(row,col);
    for(let i = 0; i <= maxLeft ; i++){
        if(board[row - i][col - i]){
            return false; 
        }
    }

        //check diagonal right
        let maxRight = Math.min(row,board.length - col - 1);
        for(let i = 0; i <= maxRight ; i++){
            if(board[row - i][col + i]){
                return false; 
            }
        }
        return true;
}
function display(board){

    for(let row of board){
        for(let elem of row){
            if(elem){
                // console.log("Q ");  //`[${arr.join(', ')}]`
                process.stdout.write("Q ");
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
const n = 5;
const board =  Array.from({ length: n }, () => Array(n).fill(null));

console.log(queens(board,0,0));