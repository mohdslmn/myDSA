
############## Sorting #####################
=> Sorting is  arranging elements of the list in ascending or descending order of some property.

=> sorting can be done in any fashion like based on some property such as: we sort itmes on amazon based on brands and price etc.

1. Bubble Sort :

=> this algorithm simply compares array element with next of its element by using two loops
=> if current element is smaller
        => sorting ina scending order
        => and if first element is greater sort in descending order
=> then swap the values of i , j and arr

=> Intitution behind this algo is largest element comes at last of array with each pass
=> also known as sinking sort and exchange sort
TC : O(N^2)
SC : O(1)

## Stability and Unstability of an algorithm 

if order is maintained in sorting it is stable and if order is not maintained it is unstable :

for ex: arr = [ 10 , 20, 20, 10, 30]
suppose arr containing weight of balls of 2 colors red and black

10 => black
20 => red
20 => black
10=> red
30 => black

if this is sorted as : 
10 => red
10 => black 
20 => red
20 => black
30 => black

it means , unstable coz previously 1st was black but after sorting 1st 10 is red
