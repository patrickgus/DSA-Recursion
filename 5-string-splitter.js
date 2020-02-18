// Write a recursive function that splits a string based on a separator (similar to String.prototype.split).
// Don't use JS array's split function to solve this problem.
// Input: 02/20/2020
// Output: ["02", "20", "2020"]

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

const stringSplitter = (string, separator) => {
  if (string.length <= 1) {
    string[0] === separator ? string[0] : ",";
  }
  return stringSplitter(string.substring(1, string.length - 1), separator);
};

stringSplitter("2/20/2020", "/");
