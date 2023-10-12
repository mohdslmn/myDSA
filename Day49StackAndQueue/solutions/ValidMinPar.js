const Stack = require("./Stack");

function validPar(str) {
  const stack = new Stack();
  let ans = 0;
  for (let ch of str) {
    if (ch === '(') {
      stack.push('(');
    } else {
      if (!stack.isEmpty() && stack.peek() === '(')
        stack.pop();
      else
        ans++;
    }
  }

  ans += stack.totalSize();  // Use the size() method to get the stack size

  return  stack.totalSize();
}

const res = "(((";
console.log(validPar(res)); // Output: 1


