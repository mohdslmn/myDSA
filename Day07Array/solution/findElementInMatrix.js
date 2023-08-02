let res = function(arr,target){
for(let i = 0; i < arr.length ; i++){
    for(let j = 0; j< arr[i].length; j++){
        if(arr[i][j] === target)
         return true;
    }
}
return false;
}

const arr1 = [[1,3,5,7], [10,11,16,20], [23,30,34,60]];
const target1 = 3;
console.log(res(arr1,target1));

//TC : O(m * n)
//SC : O(1)

// USING BINARY SEARCH

var searchMatrix = function(matrix, target) {
    if(!matrix || !matrix.length) return false;
   
   const rows = matrix.length;
   const cols = matrix[0].length;
   
   function hasTarget(startRow, endRow, startCol, endCol) {
       // recursion base case
       if(startRow > endRow || startCol > endCol) return false;
       
       // find middle of the matrix
       const middleRow = Math.floor((endRow - startRow) / 2) + startRow;
       const middleCol = Math.floor((endCol - startCol) / 2) + startCol;
       
       // if we found the target we solve the problem, so return true  
       if(matrix[middleRow][middleCol] === target) return true;
       
       // it is the "devide" step, basically, we define the recurrence relation for the recursion function.
       if (matrix[middleRow][middleCol] < target) {
           // let m - is our middle point.
           // if m less than the target than all points before m also less tha target (marked by x)
           // so we only need look through cells marked by 1 and 2
           // x x x 2 2
           // x x x 2 2
           // x x m 2 2
           // 1 1 1 1 1
           // 1 1 1 1 1
           return hasTarget(middleRow + 1, endRow, startCol, endCol) ||
                  hasTarget(startRow, middleRow, middleCol + 1, endCol);
       } else {
           // let m - is our middle point.
           // if m more than the target than all points after m also bigger than the target (marked by x)
           // so we only need look through cells marked by 1 and 2
           // 1 1 2 2 2
           // 1 1 2 2 2
           // 1 1 m x x
           // 1 1 x x x
           // 1 1 x x x
           return hasTarget(startRow, endRow, startCol, middleCol - 1) ||
                  hasTarget(startRow, middleRow - 1, middleCol, endCol);
       }
   }
   
   return hasTarget(0, rows - 1, 0, cols - 1);
};
const arr = [[1,3,5,7], [10,11,16,20], [23,30,34,60]];
const target = 3;
console.log(res(arr,target));

//TC : O(m * n)
//SC : O(max(rows, cols))