 #### BackTracking ####

 let's understand with the example :

 there is a maze such as :
  
  3   2   1
 +-----------+ 
3|A |   |    |      
2|  |   |    |      
1|  |   |  D |      
 +-----------+

 lets suppose  A has to be reach at D and A can goes by choosing either down or right 

we will make recursion call to reach at D.
and we can say  if A is at (3,1) , A has only one option i.e down to reach at D. can see in the figure.

  3   2   1
 +-----------+ 
3|  |   | A  |      
2|  |   |    |      
1|  |   |  D |      
 +-----------+

 how recursion call will be made?

 at starting, A is at (3,3)
   3   2   1
 +-----------+ 
3|A |   |    |      
2|  |   |    |      
1|  |   |  D |      
 +-----------+

A is either go at (3,2)right or (2,3) down .
if A moves down(2,3) then recursion call will be made for this particular area as shown in figure
   3   2   1
2| A|   |    |      
1|  |   |  D |      
 +-----------+

And if A moves right (3,2)  then recursion call will be made for this particular area as shown in figure:

  2     1
 +-----------+ 
3|  A|    |      
2|   |    |      
1|   |  D |      
 +-----------+

And now if A moves from (2,3) to  either  (1,2) down or (2,2)right 
if A moves towards down (1,2) fig. will be as:

    2     1
2  | A |    |      
1  |   |  D |      
 +-----------+

And if  A moves right (2,2) fig. will be as :


    2     1
2  |    |    |      
1  | A  |  D |      
 +-----------+

in this way A has only one way to reach at D.
NOTE : when A reaches at either row or column 1 then A has only one specific path to reac at D.

after A moves right (2,2), if A moves either right (2,1) or down (1,2) 

if A moves right (2,1):
it has only one path to reach at D:

      1 
2   |  A |      
1   |  D | 

if A moves down (1,2):
       
       2      1
   1  |  A |  D | 


it has  also only one path to reach at D:  

Similarly we will find ways for (3,2)

here is the tree:
                   
                   
                      r,c  
                    (3,3)
                   /     \
                (2,3)     (3,2)
                 /  \      /   \
              (1,2) (2,2) (3,1) (2,2)
                     /  \
                (1,2)  (2,1)


When we reach at 1 either row or column it will return 1 to recursion call.

(1,2) & (2,1) will return 1 , 1 to (2,2) so (2,2) will return 2 to (2,3)
 and (1,2) will return 1 so (2,3) will return 3 to (3,3)

(3,1) will return 1 and (2,2) will return 2 , so (3,2) will return 2 + 1 = 3 to (3,3)

therefore, (2,3) return 3 and (3,2) also return 3 so (3,3) will recieve 6 finally.

return values means no.of ways to reach A to D. for ex: from (2,2) A can reach to D in 2 ways .