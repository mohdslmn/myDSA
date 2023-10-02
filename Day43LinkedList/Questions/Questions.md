Ques1. create a fn which accepts two argument one is no.of to remove elements and 2nd argument is Data Structure:

for example: toRemove = 3 , ds = 4,8,2,5,6,7,2
first Iteration : 8,2,5,6,7,2 //removed 4 ,  4 < 8
Second Iteration : 8,5,6,7,2 // removed 2 , 8 > 2
third Iteration : 8,6,7,2 // removed 5 , 8 > 5 so ,expected output
toRemove value is 3 so 3 element will be removed.
Note : The removal process should be in-place.
TC : O(toRemove)

Ques2. 
876. Middle of the Linked List
Solved
Easy
Topics
Companies
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Ques3.
Palindrome Linked List
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.
Example 1:
Input: head = [1,2,2,1]
Output: true
Example 2:
Input: head = [1,2]
Output: false