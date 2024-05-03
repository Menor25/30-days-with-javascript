// Day 1 of thwe 30-day Vanilla Javascript coding trip
// Variables, Data Type and Conditional Statements

// Project: Build a simple calculator that takes two numbers and an operator as input and displays the result.

// Task 1: Declare variables for the two numbers and the operator
    let num1 = 2;
    let num2 = 4;
    let operator = "+";

// Task 2: Use conditional statement(if/else or switch) to handle different operators (+, -, *, /)
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }else {
        console.log('Enter a valid operator');
        return;
    }

// Task 3: Display the result using console.log()
    console.log(result)

// Task 4: Test the calculator with different inputs and operators
  /**
   * Step 1: Test using simple addition
   *    Set num1 to 2 and num2 to 4
   *    Set the operator to '+'
   *    Run the code and verify the output is 6
   */

    /**
   * Step 2: Test using simple subtraction
   *    Set num1 to 4 and num2 to 3
   *    Set the operator to '-'
   *    Run the code and verify the output is 1
   */

    /**
   * Step 3: Test using simple multiplication
   *    Set num1 to 4 and num2 to 5
   *    Set the operator to '*'
   *    Run the code and verify the output is 20
   */

    /**
   * Step 4: Test using simple division
   *    Set num1 to 10 and num2 to 2
   *    Set the operator to '/'
   *    Run the code and verify the output is 5
   */

    /**
   * Step 1: Test using invalid operator
   *    Set num1 to 2 and num2 to 3
   *    Set the operator to '%'
   *    Run the code and verify the output is 'Enter a valid operator'
   */