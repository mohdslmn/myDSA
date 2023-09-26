
### BackTracking Problem ###

Ques2. N-Knight problem.

How knight eliminates?

   0   1   2   3
  ----------------
0|   |   |  | E  |
 ----------------
1|   | K |   |   |
 ----------------
2|   |   |   | E |
 ----------------
3| E |   | E |   |
 ----------------

* E indiactes elemination.That knight will cancel out each other if it comes at that place.
* So apart from E places K can be placed at any cell.

Say target = 4.

   0   1   2   3
  ----------------
0| K |   |   |   |
 ----------------
1|   |   |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

 K is at (0,0,4).
 Knights = 4
 knights will be reduced by 1.
 * I can place K at (0,1,3). 
 * I can place K at (0,2,2).
 * I can place K at (0,3,1).
 * I can place K at (0,4,0).

 here knights reduced to 0, means one of the ans. is found.

 so remove (0,4,0) from call stack.
 and (0,3,1) is also removed from call stack , hence K will also be removed from (0,3,1) due to backtracking.

 Now we are at (0,2,2) function call :

   0   1   2   3
  ----------------
0| K | K | K |   |
 ----------------
1|   |   |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

* when you remove one knight from column try to see for next row when it will happen when you reach at the end of one column.
* so trying for next column,
  can i place K at (1,0)? No

  can i place K at (1,1)? Yes not violating.
  so at (1,1,1) ,Knight will be reduced by 1.i can place K

     0   1   2   3
  ----------------
0| K | K | K |   |
 ----------------
1|   | K |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

 







