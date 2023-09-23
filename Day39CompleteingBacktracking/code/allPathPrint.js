function allPathPrint(p, maze, r, c, path, step) {
    if (r === maze.length - 1 && c === maze[0].length - 1) {
      path[r][c] = step;
      for (let arr of path) {
        console.log(`[${arr.join(', ')}]`);
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
      allPathPrint(p + "D", maze, r + 1, c, path, step + 1);
    }
    if (c < maze[0].length - 1) {
      allPathPrint(p + "R", maze, r, c + 1, path, step + 1);
    }
    if (r > 0) {
      allPathPrint(p + "U", maze, r - 1, c, path, step + 1);
    }
    if (c > 0) {
      allPathPrint(p + "L", maze, r, c - 1, path, step + 1);
    }
  
    maze[r][c] = true;
    path[r][c] = 0;
  }
  
  const board = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
  ];
  
  const numRows = board.length;
  const numCols = board[0].length;
  
  const path = Array(numRows)
    .fill(null)
    .map(() => Array(numCols).fill(0));
  
  const step = 1;
  
  allPathPrint("", board, 0, 0, path, step);
  