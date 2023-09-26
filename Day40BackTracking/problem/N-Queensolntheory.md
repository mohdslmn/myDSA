### BACKTRACKING PROBLEM ###
Ques1. N-Queen Problem?

Queen on chase board can move in any direction. right,left,up,right,diagonally.
but the condition is more than one queen cant be in a same row or column or diagonally.
  
  0    1   2   3
  ----------------
0| Q |   |   |   |
 ----------------
1|   |   |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

 such as Q(0,0) cant be placed at (0,1) and (1,0) and (1,1),therefore Q can be placed at Q(1,2).

   0   1   2   3
  ----------------
0| Q |   |   |   |
 ----------------
1|   |   | Q |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------
* So we can say this is a recursive problem because at first we are saying give ans for Q(0,0) it will find ans. in remaining cells.
* in  row 2 no way to add Q as, you cant place at(2,0) , Q(0,0) will cut this , cant place at (2,2),(2,3).
  so it is not worth to check for  row 3.If no way to place in row 2 similarly not placed for row3.
* when recursion call is over remove Q(1,2) and perform backtracking(if changes  made by Q(1,2)recursion call then it should also be remove) and check for Q(1,3).


   0   1   2   3
  ----------------
0| Q |   |   |   |
 ----------------
1|   |   |   | Q |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

 *I can place Q over here (2,1) .

    0  1   2   3
  ----------------
0| Q |   |   |   |
 ----------------
1|   |   |   | Q |
 ----------------
2|   | Q |   |   |
 ----------------
3|   |   |   |   |
 ----------------

 *checking for Q(2,1), it cant be placed at row3 because condition is violated,
 *so perform bakctracking and move Q(2,1) to Q(2,2).

   0   1   2   3
  ----------------
0| Q |   |   |   |
 ----------------
1|   |   |   | Q |
 ----------------
2|   |   | Q |   |
 ----------------
3|   |   |   |   |
 ----------------

* but we cant move Q(2,1) to Q(2,2) because condition is violated and can we move Q to Q(2,3) no we cant,
* perform backtracking will go at Q(1,3) , therefore in backtracking will found Q(1,3) is also wrong means cant place , so remove 
* and go for Q(0,0) , in backtracking found it is also wrong so remove it and move at Q(0,1).

   0   1   2   3
  ----------------
0|   | Q |   |   |
 ----------------
1|   |   |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

* Q can be place at (1,3).


   0   1   2   3
  ----------------
0|   | Q |   |   |
 ----------------
1|   |   |   | Q |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

* Q can be place at (2,0).

   0   1   2   3
  ----------------
0|   | Q |   |   |
 ----------------
1|   |   |   | Q |
 ----------------
2| Q |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

* Q can be place at (3,2).

   0   1   2   3
  ----------------
0|   | Q |   |   |
 ----------------
1|   |   |   | Q |
 ----------------
2| Q |   |   |   |
 ----------------
3|   |   | Q |   |
 ----------------

*THIS IS ONE OF THE ANSWER.

* After this Q is at(3,2)
* move Q at (3,3) cant be placed here
* so perform backtracking , move Q(2,0) to ,but cant be placed at (2,1) , (2,2) , (2,3)
* so cant move Q(2,0), go back at Q(1,3) but cant be move.
* so go back at(0,1) and move at (0,2).

   0   1   2   3
  ----------------
0|   |   | Q |   |
 ----------------
1|   |   |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------


BASICALLY WE ARE DOING THAT FOR Q(0,0) WE ARE CHECKING RECURSIVELY THAT WE CAN PLACE Q FROM (1,1) TO (3,3).

   0   1   2   3
  ----------------
0| Q |   |   |   |
 ----------------
1|   |   |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |
 ----------------

 WE ARE CHECKING FOR : THAT Q CAN BE PLACE HERE(IN THESE CELLS) OR NOT:
  
   0   1   2   3
1|   |   |   |   |
 ----------------
2|   |   |   |   |
 ----------------
3|   |   |   |   |


IF YES CHECK FOR OTHER PLACE. 
IF Q CANT BE PLACE ANY WHERE ,PERFORM BACKTRACKING AND REMOVE Q TO ANOTHER PLACE AND SIMILARLY CHECK FOR EACH REMAINING CELL.

QUES. HOW TO CHECK YOU ARE AT SAFER PLACE OR NOT WHILE BACKTRACKING?
ANS. when we are backtracking, it is obviuos below rows dont have Queens so check only for above rows.
  
  1   2   3    4   5
 ---------------------
1|   |   | C |   |   |
 ---------------------
2| C |   |   |   | C |
 ---------------------
3|   |   |   |   |   |
 ---------------------
4|   |   | Q |   |   |
 ---------------------
5|   |   |   |   |   |
 ---------------------

for Q(4,3) we will check at : (2,1) , (1,3) , (2,5)

for(1,3) check for [0,row]
forevery diagonal doing row-- and col++ .
for how many times r-- would be performed , check from(4,3) how many cells  are at right side i.e. to the end of column(4,5) :
 [totallength - col - 1 ]; i.e. 5 - 3 = 2

to get how many cells are at left hand side of Q , it is equal to column number - 1 becoz we are staring column number from 1 but if we start col no. from 0 it is equal to colmun number . such as Q(4,3) it is at col no. 3 so at LHS there is 2 column.
but if q is at (3,4), 

  1   2   3    4   5
 ---------------------
1|   | C |   | C |   |
 ---------------------
2|   |   |   |   | C |
 ---------------------
3|   |   |   | Q  |  |
 ---------------------
4|   |   |   |   |   |
 ---------------------
5|   |   |   |   |   |
 ---------------------

col no. 4 but we have to move at only col no.2 not 4 as shown in fig. so we will choose minimum of row & col i.e. min(r,c).


Time complexity: O(n!)
Space Complexity : O(n*n)








