
  // Another one line solution by using split & join method

//   return command.split("()").join("o").split("(al)").join("al");  works perfectly fine
var interpret = function(command) {
    let res = '';
    
    for (let i = 0; i < command.length; ) {
        if (command[i] === "G") {
            res += "G";
            i++;
        } else if (command.substring(i, i + 2) === "()") {
            res += "o";
            i += 2; // Skip the next 2 characters for "()"
        } else if (command.substring(i, i + 4) === "(al)") {
            res += "al";
            i += 4; // Skip the next 4 characters for "(al)"
        } else {
            // If none of the patterns match, just append the current character and move to the next
            res += command[i];
            i++;
        }
    }
  
    return res;
  };
  
  // Test cases
  console.log(interpret("G()(al)")); // Should output "Goal"
  console.log(interpret("G()()()")); // Should output "Gooo"
  console.log(interpret("(al)G(al)()")); // Should output "alGaloo"

  // if we write in else if(command[i] === "()") this will be wrong coz substrings cannot be compared as , so to compare substring we use method substring and if comparing with one char move i + 1 , else if compare with two char move i + 2 and so on.
  
  
