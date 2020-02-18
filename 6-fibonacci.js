// Write a recursive function that prints the Fibonacci sequence of a given number.
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers.
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13.
// The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

const fibonancci = num => {
  if (num === 2) {
    return [1, 1];
  }
  let fibArray = fibonancci(num - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
};

fibonancci(13);
