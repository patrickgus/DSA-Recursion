// Write a function that reverses a string. Take a string as input, reverse the string,
// and return the new string.

// What is the input to the program? a string
// What is the output of the program? that string but in reverse order
// What is the input to each recursive call?
// What is the output of each recursive call?

const reverseStirng = string => {
  if (string === "") {
    return "";
  }
  return reverseStirng(string.slice(1) + string.charAt(0));
};

reverseStirng("reverse");
