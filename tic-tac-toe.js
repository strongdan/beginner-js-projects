let board = [ [' ', ' ', ' '],
              [' ', ' ', ' '],
              [' ', ' ', ' '] ];

let currentPlayer = Math.floor(Math.random()) > 0.5 ? 'X' : 'O';

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

const placeMarker = (marker, position) => {
  let position = prompt('Please enter the position you would like to place your marker, 1-9');
  // adds X or O to board at specified location  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] = position) {
          currentPlayer = board[i][j];  
        }
    }
  }
}


