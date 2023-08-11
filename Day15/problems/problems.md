################### Problems On Binary Search ####################

## Ques1. search element in infinite sorted array.

Suppose you have a sorted array of infinite numbers, how would you search an element in the array?
Source: Amazon Interview Experience. 
Since array is sorted, the first thing clicks into mind is binary search, but the problem here is that we don’t know size of array. 

Soln:without using arr.length
  we take start = 0 & end = 1 , start comparing elemnts in chunks and we will start = end + 1 and 
   end = end + (end - start + 1) * 2;  it is basically end is moving by 2N and N is the last end.

   once we find target < end then apply simply binary search.


## Ques2. find peakElement in Mountain Array? Also available on leetcode

const arr = [10,15,25,5,4,2];

o/p : 2 // peak elem is 25 is at index 2

## Ques 3. search elemnt in Mountain array? Also available on leetcode

const arr = [5,6,7,8,4,3,2,1];
const target = 3;

o/p : 5

## Ques 4. search elemnt in rotated array ? Also available on leetcode

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

