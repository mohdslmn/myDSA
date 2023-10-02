  const ll = new LinkedList(1);
  ll.append(2);
  ll.append(3);
  ll.append(12);
  ll.insertAt(7,2);
  ll.insertAt(8,3);
  ll.insertAt(9,1);
  ll.removeFrom(1);
  console.log(ll.search(7));

  ll.printList();