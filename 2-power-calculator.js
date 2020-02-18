// Write a function called powerCalculator() that takes two parameters, an integer as a base,
// and another integer as an exponent. The function returns the value of the base raised to the power of the exponent.
// Use only exponents greater than or equal to 0 (positive numbers)
// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

// What is the input to the program? two numbers(base, exponent)
// What is the output of the program? one number([base] to the power of [exponent])
// What is the input to each recursive call?
// What is the output of each recursive call?

const powerCalculator = (base, exponent) => {
  if (exponent < 0) {
    return `exponent should be >= 0`;
  } else if (exponent === 0) {
    return 1;
  }
  return base * powerCalculator(base, exponent - 1);
};

powerCalculator(10, 2);
