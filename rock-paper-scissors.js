const getUserChoice = userInput => {
  userInput = userInput.toLowerCase('Please enter a selection:');
  if (userInput === 'rock' || 'paper' || 'scissors') {
    return userInput;
  } else {
    console.log('please enter a valid selection');
  }
}

const getComputerChoice = () => {
  let compSelection = Math.floor(Math.random() * 2) === 0;
  if ( compSelection === 0) {
    return 'rock';
  } else if (compSelection === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return `User wins!`; // secret "cheat code" allows user to always win
  }
  if (userChoice === computerChoice) {
    return `It's a tie!`;
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return `User wins!`;
    } else {
      return `Computer wins!`;
    }
  } else if (userChoice === 'paper') {
			if (computerChoice === 'scissors') {
          return `Computer wins!`;
    	} else {
        return `User wins!`;
      }
		} else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return `Computer wins!`;
      } else {
        return `User wins!`;
      }
    }
}

const playGame = () => {
  let userChoice = getUserChoice('scissors');
  console.log(`User: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer: ${computerChoice}`);
  console.log(determineWinnter(userChoice, computerChoice));
}

playGame();
