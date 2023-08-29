### Recursion

before starting recursion let's understand the concept :-

if we have to print "hello" 5 times w/o using loop and you have to call only one function
and dont repeat console.log() more than 1 time in a single function

we can do something as:

function print1(){
console.log(1);
print2(2);
}
function print2(n){
console.log(n);
print3(3);
}
function print3(n){
console.log(n);
print4(4);
}
function print4(n){
console.log(n);
print5(5);
}
function print5(n){
console.log(n);
}
print1(); // 1 2 3 4 5

- here point is that we are repeating same work again and again ,every function taking same no. of arguments and doing same thing
- Recursion is calling same function from a function itself again and again.Until reach to the base condition.
- We define base condition for where this calling of repeatation of function will stop.

let's do above task using recursion.

function print1To5(n){

//base condition
if(n == 5){
console.log(n);
return;
}
//body
console.log(n);
// recursive case
print1To5(n+1);
}
print1To5(1); // 1 2 3 4 5

- here if we remove base case the stack overflow error will happen bcoz function will repeatedly call again and again and time comes when executing stack memory will exceed .

- every time function is calling itself each function call is getting seperate memory in the memory stack.

## Why do we need rescursion?

Ans.

- it helps in solving complex problems in a simple way .
- we can convert recursion solution into iteration & vice-versa.
  - directly use iteration for big problems is difficult so we use recursion then we go for iteration for optimization purpose or if recursion doesnot solve the problem.

*space complexity:  it is not constant bcoz of recursive call.

- it helps in breaking bigger problem into smaller one.

=> Recusrion tree for fibonacci series:

             fibo(4)
           /          \
        fibo(3)   +      fibo(2)
       /    \          /       \
      /       \       /          \
  fibo(2) + fibo(1)   fibo(1) + fibo(0)
    /    \
fib(1) + fibo(0)

let's understand this :

- fib(4) calls fibo(3) + fibo(2)
- again fibo(3) will call fibo(2) + fibo(1)
- again fibo(2) will call fibo(1) + fibo(0)
- again fibo(2) on the right hand of tree will call fibo(1) + fibo(0)

- so from bottom left side fibo(1) + fibo(0) will return 1 to fibo(2)
- and fibo(2) = 1 + fibo(1) = 1 , will return 2 to fibo(3)
- on the right hand side fibo(2) will get 1 from their child fibo(1) + fibo(0) = 1
- fibo(4) will get 3 bcoz fibo(3) returns 2 and fibo(2) returns 1 so the sum is 3

Some steps to follow to solve any problem of recursion:

1. identify if you can break the problem into smaller one
2.write the recurrence relation if needed
3.Draw the recursive tree
   3.1 see the flow of functions how they are stored in call stack
   3.2 identify and follow left subtree call and right subtree call (means the order of execution of each step which step will execute first)
   3.3
4. see how values are returned at each step and also concern about where function call will come out and in the end you can come out from main function
