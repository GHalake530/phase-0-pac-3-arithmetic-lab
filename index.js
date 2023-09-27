// Function to add two numbers and return the result
function add(a, b) {
    return a + b;
  }
  // Function to subtract b from a and return the result
  function subtract(a, b) {
    return a - b;
  }
  // Function to multiply two numbers and return the result
  function multiply(a, b) {
    return a * b;
  }
  // Function to divide a by b and return the result
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  // Function to increment a number by 1 and return the result
  function increment(n) {
    return n + 1;
  }
  // Function to decrement a number by 1 and return the result
  function decrement(n) {
    return n - 1;
  }
  // Function to parse n as an integer and return the parsed integer
  function makeInt(n) {
    return parseInt(n, 10);
  } 
  // Function to parse n as a floating point number and return the parsed number
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };
  