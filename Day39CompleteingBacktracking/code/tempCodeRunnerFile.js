function allPathPrint(p, maze, r, c, path, step) {
  if (r === maze.length - 1 && c === maze[0].length - 1) {
    // console.log(p);
    path[r][c] = step;
    for(let arr of path){
        console.log(toString(arr));   
    }
    console.log(p);
    return;
  }

  if (!maze[r][c]) {
    return;
  }
  maze[r][c] = false;
  path[r][c] = step;
  if (r < maze.length - 1) {
    //we are incrementing recursion tree so r + 1 instead of r - 1
    allPathPrint(p + "D", maze, r + 1, c, path, step + 1);
  }
  if (c < maze[0].length - 1) {
    allPathPrint(p + "R", maze, r, c + 1, path, step+ 1);
  }
  //for Up direction
  if (r > 0) {
    allPathPrint(p + "U", maze, r - 1, c, path, step + 1);
  }
  //for left
  if (c > 0) {
    allPathPrint(p + "L", maze, r, c - 1, path, step + 1);
  }

  // this line is where recursion call is over
  //so you have to remove that changes made via this recursion call

  maze[r][c] = true;
  path[r][c] = 0;
}
const board = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ];
const path = [
    [board.length],
    [board[0].length],
];
const step = 1;


allPathPrint("",board,0,0,path,step);
