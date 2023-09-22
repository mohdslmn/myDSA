function mazeWithObstacle(p, maze, r, c) {
  if (r === maze.length - 1 && c === maze[0].length - 1) {
    console.log(p);
    return;
  }
  if (!maze[r][c]) {
    return;
  }
  if (r < maze.length - 1) {
    //we are incrementing recursion tree so r + 1 instead of r - 1
    mazeWithObstacle(p + "D", maze, r + 1, c);
  }
  if (c < maze[0].length - 1) {
    mazeWithObstacle(p + "R", maze, r, c + 1);
  }
}
//false indicates obstacle
const board = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];

mazeWithObstacle("", board, 0, 0);
//DDRR
//RRDD
// only two ways to reach at D
