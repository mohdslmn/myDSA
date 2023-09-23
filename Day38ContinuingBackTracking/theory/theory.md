#### Maze With Obstacle Problem ####

  0   1   2 
 +-----------+ 
0|A |   |    |      
1|  |riv|    |      
2|  |   |  D |      
 +-----------+

 * say at (1,1) riv , there is a river
 * Logic is :
 when you land on new cell check this cell is rever or not 
 if lanidng cell in not a river  make recursion call
 if you land on river stop recursion for that call  , cant make recursion call coz we cant move from river


                             (path,0,0)
                            /          \
                         (1,0)         (0,1)
                          /  \          /   \
                       (2,0) (1,1)    (1,1) (0,2)
                          \                   / 
                          (2,1)            (1,2)  
                            \                /
                            (2,2)          (2,2)

at(1,1) , we are at river.

we have a boolean 2-D array in which false indiactes the obstacles such as when there is a river.
const board = [
  [true, true, true],
  [true, false, true],
  [true, true, true],
];







