// allows basic arithmetic operations - including addition, subtraction, multiplication and division
const add = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  if (num2 === 0) {
    console.log('You cannot divide by zero');  
  } else {
    return num1 / num2;  
  }
}

const getUserInput = () => {
  console.log('Welcome! You can add, subtract, multiply or divide...');  
  let num1 = prompt('Please enter your first number.');
  let operator = prompt('Please enter + for addition, - for subtraction, * for multiplication or / for division');
  let num2 = prompt('Please enter your second number');
  return [num1, operator, num2];
}

const calculate = () => {
    let values = getUserInput();
    let num1 = values[0];
    let operator = values[1];
    let num2 = values[2];
    if (operator === '+') {
      return add(num1, num2);  
    } else if (operator === '-') {
      return subtract(num1, num2);  
    } else if (operator === '*') {
      return multiply(num1, num2);  
    } else if (operator === '/') {
      return divide(num1, num2); 
    } else {
      console.log('Please enter a valid operator'); 
    }
}

