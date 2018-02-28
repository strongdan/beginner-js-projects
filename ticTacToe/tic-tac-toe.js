let board = [ [' ', ' ', ' '],
              [' ', ' ', ' '],
              [' ', ' ', ' '] ];

let currentPlayer;

const printBoardPositions = () => {
  console.log('Here is the current board...');
  // prints positions for user
  let currentNumber = 1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        board[i][j] = currentNumber;
        currentNumber += 1;
    }
  }
 console.log(board);
}

const markerExists = () => {
  // checks to see if a marker has already been placed 
}

const placeMarker = (playerMarker) => {
  let position = prompt('Please enter the position you would like to place your marker, 1-9');
  // adds X or O to board at specified location  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === position && !markerExists()) {
          currentPlayer = board[i][j];  
        } else {
          placeMarker(); 
        }
    }
  }
}

const switchPlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'; 
  } else {
    currentPlayer = 'X';
  }
}

const gameWon = () => {
  // checks to see if any markers span three consecutive cells  
  // returns true if won, false otherwise
}

const playGame = () => {
  let startPlayer = Math.floor(Math.random()) > 0.5 ? 'X' : 'O';
  currentPlayer = startPlayer;
  while (!gameWon()) {
    printBoardPositions();
    placeMarker(currentPlayer);
    switchPlayer();         
  }
  console.log(`Player ${currentPlayer} won!);
}

playGame();


