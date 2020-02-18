// Write a recursive function that prints out the binary representation of a given number.
// For example, the program should take 3 as an input and print 11 as output, or 25 as an input
// and print 11001 as an output. Note that the binary representation of 0 should be 0.

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

const binary = function(n) {
  let binNum;
  if (n <= 0) {
    return "";
  }
  binNum = Math.floor(n % 2);
  return binary(Math.floor(n / 2)) + binNum;
};

binary(3);
