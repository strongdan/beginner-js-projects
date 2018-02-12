let userName = prompt('Please enter your name', '');
let userQuestion = prompt('Please enter your question:', '');
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
  case 2:
    eightBall = 'Reply hazy. Try again';
    break;  
  case 3:
    eightBall = 'Cannot predict now';
    break;  
  case 4:
    eightBall = 'Don\'t count on it';
    break;  
  case 5:
    eightBall = 'My sources say no';
    break;  
  case 6:
    eightBall = 'Outlook not so good';
    break; 
  case 7:
    eightBall = 'Signs point to yes';
    break;  
}

console.log(`${userName}'s question: ${userQuestion}`);
console.log(`Eight ball's answer: ${eightBall}`);
