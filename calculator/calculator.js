// allows basic arithmetic operations - including addition, subtraction, multiplication and division
const add = (num1, num2) => {
  return Number(num1) + Number(num2);
}

const subtract = (num1, num2) => {
  return Number(num1) - Number(num2);
}

const multiply = (num1, num2) => {
  return Number(num1) * Number(num2);
}

const divide = (num1, num2) => {
  if (Number(num2) === 0) {
    console.log('You cannot divide by zero');  
  } else {
    return Number(num1) / Number(num2);  
  }
}

const getUserInput = () => {
  console.log('Welcome! You can add, subtract, multiply or divide...');  
  let num1 = prompt('Please enter your first number.');
  let operator = prompt('Please enter + for addition, - for subtraction, * for multiplication or / for division');
  if (['+', '-', '*', '/'].indexOf(operator) < 0) {
      console.log('Please enter a valid operator');
      getUserInput();
      }
  let num2 = prompt('Please enter your second number');
  return [num1, operator, num2];
}

const calculate = () => {
    let values = getUserInput();
    let num1 = values[0].trim();
    let operator = values[1].trim();
    let num2 = values[2].trim();
    if (operator === '+') {
      alert(`Your answer is ${add(num1, num2)}`);
      return add(num1, num2);  
    } else if (operator === '-') {
      alert(`Your answer is ${subtract(num1, num2)}`);
      return subtract(num1, num2);  
    } else if (operator === '*') {
      alert(`Your answer is ${multiply(num1, num2)}`);
      return multiply(num1, num2);  
    } else if (operator === '/') {
      alert(`Your answer is ${divide(num1, num2)}`);
      return divide(num1, num2); 
    } else {
      console.log('Please enter a valid operator'); 
    }
}

calculate();

module.exports = {
	calculate,
  getUserInput,
  add,
  subtract,
  multiply,
	divide,
}
