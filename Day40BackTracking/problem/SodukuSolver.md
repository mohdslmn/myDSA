
Ques3. Soduku Problem.


Description
Editorial
Editorial
Solutions
Solutions
Submissions
Submissions

Code

Testcase
Testcase
Result

37. Sudoku Solver
Hard
Topics
Companies
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.

 
Sudoku Solver Image [https://leetcode.com/problems/sudoku-solver/description/].
Example 1:


Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
Explanation: The input board is shown above and the only valid solution is shown below:


// SOLUTION:

* we are going to determine which col or rows are empty.
* say we found empty cell at(0,2)
* i will put any no. from 1 to 9. there is in 3 * 3 grid put those no. which is not present in 3 * 3 grid.
 say i put 1 at (0,2)

* again (0,3) is empty , put 2 there.
* so there will be a for loop that iterates over there. for each empty cell.

* if none of the empty element find simply return true.

* when we done with the for loop , will check are there all cells of sudoku is filled? if not
 then replace it ny 1to9 numbers
 while coming out from recursion call.

*we are checking empty elementsvia rows and columns and 3* 3 box

how we will know there is a start or end of 3*3 box?
we can take the square root of box(9,9 ) which is 3.

substract from the row you are currently at to row % row for ex:
you are at (3,6): 
  3 - 3 % 3 
  6 - 6% 3

Time Complexity:O(9^n^2)
Space Complexity: O(N^2)