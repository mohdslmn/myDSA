########### Insertion Sort #############

=> i = 0, j = i + 1 ;
=> arr[i] < arr[j] then swap(values of arr and i & j)
=> inside this loop also check if(arr[j] < arr[j - 1]) then swap(j,j-1,arr) otherwise break the loop, breaking the loop bcoz left side of array is already sorted
=> basically j is iterating in the left side of array and sorting it so j is always > 0

=> and i will iterate till i <= arr.length - 2  bcoz j = i + 1, when i = arr.length - 2 ,j = arr.length - 1 so it will compare all element and if i do i < arr.length then j = arr.length + 1 is out of bound therefore " i < arr.length - 2"

=> Time complexity:
O(n^2) => Worst case
O(n) => best case

Ques. why insertion sort?

* this algo is adaptive means if array is sorted no. of swaps will be reduced as compared to bubble sort.

* this algo is stable.

* used for samll values of N : means if array is partially sorted it works good bcoz it takes part in hybrid algortihm (that algorithm which uses more than one sorting algorithms together).