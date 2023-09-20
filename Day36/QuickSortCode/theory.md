    #### QUICK SORT ####

* CONCEPT OF PIVOT :-

what is pivot?

Choosing an element from a list consider that element as pivot(any one element of a list can be choosen as a pivot), after first pass the elements that are shorter than pivot(elements < pivot) comes into LHS 
and the elements that are greater than pivot(elements > pivot) comes into RHS.

let's take an example: 
 arr = 5 , 4 , 3 , 2 , 1 ;

if i choose 4 as pivot :
after one pass arr will be as : [1,3,2,4,5] 
all elements on the left side of 4 is sammler that 4 either sorted or not and same for RHS.
* to sort LHS or RHS we use recursion calls

Now arr = [1,3,2,4,5] 

       4
    /      \
 1,3,2       5

 again choose pivot from [1,3,2] let pivot = 3

   3
  /
  1,2
again choose pivot from [1,2] let pivot = 2

   2
  /
  1

as a result we get : arr = [1,2,3,4,5]

IMPORTANT : in merge sort if array is sorted then also it will go till the very end to base condition but here in quick sort it won't.
           if array is sorted it wont go till the end we will see how?


Ques. How to put pivot at correct position?
Ans. given arr = [5,4,3,2,1]

* take 2 pointers start and end , start => 5 & end => 1
* take pivot let pivot = 4

-check if start > pivot and if end < pivot then swap end with start
we get arr = [1,4,3,2,5]

-start++ and end--

-start === pivot no change and end < pivot(2 < 4) so swap pivot with end
we get arr [1,2,3,4,5]

- end and start pointing 3 and array is sorted

Ques. How to choose pivot?
Ans. can pick  anyone of them:
   *random element
   *corner element
   *middle element

TIME AND SPACE COMPLEXITIES:

=> Worst Case could be pivot is either smallest or greatest among all elements.
  (n-1) recursion call would be made.

  So, O(N^2)

=> Best Case:
   O(NlogN)

Notes :
* Quick sort is not stable
* Inplace sorting algorithm, it is preferred instead of merge sort bcoz it doesnot take extra space O(N) like merge sort does
* merge sort is better with linkedlist due to memory allocation.



HYBRID SORTING ALGORITHM(tim sort) :

some internal algorithms use merge sort + insertion sort 
why insertion sort bcoz it works very well with partially sorted data

