
function allPath(p ,maze , r, c){
    if (r === maze.length - 1 && c === maze[0].length - 1) {
        console.log(p);
        return;
      }
     
      if (!maze[r][c]) {
        return;
      }
      maze[r][c] = false;
      if (r < maze.length - 1) {
        //we are incrementing recursion tree so r + 1 instead of r - 1
        allPath(p + "D", maze, r + 1, c);
      }
      if (c < maze[0].length - 1) {
         allPath(p + "R", maze, r, c + 1);
      }
      //for Up direction
      if(r > 0){
        allPath(p + "U" , maze , r - 1, c) ;
      }
      //for left
      if(c > 0){
        allPath(p + "L" , maze , r , c - 1);
      }

      // this line is where recursion call is over
      //so you have to remove that changes made via this recursion call

      maze[r][c] = true;
}

const board = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ];

allPath("",board,0,0);