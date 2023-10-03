### DOubly Linked List ###

Drawback of Singly Linked List:

*if we are at any specific node in SLL , we cant go back or access its previous node.

So, in double linked list each node contains 3 fields :
1.previous
2.data
3.next

Node Structure:
 -----------------
 | prev|data|next|
 -----------------
 
Comparision between SLL vs DLL:-
Advantages:
*DLL can be travsersed in either direction.
*Some operations become easier(such as deletion,inserting before a node)
Disadvantages:
*Require more space
*List manipulations are slower because more links must be changed
*Greater chance of having bugs(because more links must be manipulated)


Real World Application of DLL:

1. in browser there is forward and backward option 
2. youtube music: prev and next button
3. github version
4. cache in your browser (helps you to hit the back button).
5. a stack,hash table,binary tree can be implemented using DLL.
6. Undo functionality in word or photoShop  

