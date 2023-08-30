### Caring about variables in Recursion ###

there are 3 types of variables we will use in recursion ::

1. the variable that are recieved in function (as an argument).
2. the variable which are present in the body of functions.
3. which variable will be returned. 

So the question is which variable type is used at which place?

tip is don't overthink !!

to understand this creating binary search program using recursion :

Ques.which type of variable is used as an argument for binary search?

Ans . always use that type of variable in argument that will be used in future function call.
such as in binary search in every function call we have to pass start and end of the array bcoz start and end of the array will be important for every call.
target vrble and arr must pass in each call without any doubt.
we cant pass mid in argument because for every call mid will be different hence mid variable will be used in body of function.




