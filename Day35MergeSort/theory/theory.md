##### MERGE SORT #####

step 1. Divide array into two parts
step 2. Get both parts sorted via recursion
step 3. Merge two sorted parts

for example: arr1 = [3,5,9];
             arr2 = [4,6,8];
    
Working :-
-start checking from starting index of both arrays
-create a new array of size arr1.length + arr2.length
-check if arr1[0](3) < arr2[0](4) yes, then put arr1[0] in the new array and move the pointer to the next index of arr1
-Now check arr1[1](5) < arr2[0](4) i.e. 5 < 4 no , so put arr2[0] i.e. 4 into new array and move pointer to the next index of arr2
new_arr = [3, 4]
- 5 < 6 , put 5 into new_arr and move pointer to next index
new_arr = [3, 4, 5]
- 9 < 6 , put 6 into new_arr and move pointer to next index
new_arr = [3, 4, 5, 6]
-9 < 8 , put 8 into new_arr and over ,there is no next index
new_arr = [3, 4, 5, 6, 8 , 9]

NOTE : whenever array is empty put element at back of this such as 
  
arr1 = [3, 5, 9 , 12 , 16, 20];
arr2 = [4 , 6, 8];

after comparing 9 < 8  there is no element remaining in arr2 so put 9,12,16,20 as it is in resultant array.

Code Explanation: 

 *we take middle of the array and split into two
 *and generate recursion call to sort that splitted array
 *if arr.length == 1 then return arr itself

 Time complexity = N * log N
 Space Complexity = O(N)