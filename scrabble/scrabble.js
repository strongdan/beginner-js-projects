const letterValues = {  'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1, 'L' : 1, 'N' : 1, 'S' : 1, 'T' : 1, 'R' : 1,
                        'D' : 2, 'G' : 2,
                        'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3,
                        'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y' : 4,
                        'K' : 5,
                        'J' : 8, 'X' : 8,
                        'Q' : 10, 'Z' : 10,
                        'Blank' : 0 };

const specialSquares = {  '2L' : [[0,3],[0,11],[3,0],[11,0],[3,14],[11,14],[14,3],[14,11]],
                          '3L' : [],
                          '2W' : [],
                          '3W' : [[0,0],[0,7],[0,14],[7,0],[7,7],[7,14],[0,14],[7,14],[3,14]] };

Array.matrix = function(numrows, numcols, initial){
   let arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
}

const specialSquares = () => {
  // creates locations for double letter, triple letter, double word, and triple word scores   
}

let originalBoard = Array.matrix(15,15,0);
let playingBoard;

const startingLetters = { 'Blank' : 2,
                          'E' : 12,
                          'A' : 9,
                          'I' : 9,
                          'O' : 8,
                          'N' : 6,
                          'R' : 6,
                          'T' : 6,
                          'L' : 4,
                          'S' : 4,
                          'U' : 4,
                          'D' : 4,
                          'G' : 3, };
let remainingLetters;
let currentScore = { 'user1' : 0,
                     'user2' : 0 };
 
const printBoard = () => {
  // prints current board to console  
}

const whoStarts = () => {
  // randomly chooses starting player  
  return Math.floor(Math.random() * 2);
}

const switchUser = () => {
  // changes user between turns 
}

const userPass = () => {
  // allows user to pass, missing one turn 
}

const dealLetters = () => {
  // randomly deals five letter from letters array to each player (if available) 
  // returns object with five letters for each player
}

const printLetters = (user) => {
  // prints current user's letters 
}

const lettersRemain = () => {
  // returns true if letters remain in remainingLetters, false otherwise 
}

const playLetters = (user, word, location) => {
  // allows player to play letters 
  // blank tiles are treated as wildcards
  // increments user score
  if (specialSquare) {
    // calculate score based on special squares  
  }
  validWord(); // checks whether word is in dictionary
  // removes played letters from remainingLetters object
}

const validWord = () => {
  // checks words against Oxford Dictionary API - https://www.npmjs.com/package/oxford-dictionary-api 
  // returns true for valid word, false otherwise
}

const startGame = () => {
  remainingLetters = startingLetters; 
  let playingBoard = originalBoard;
  dealLetters();
  printBoard();
  printLetters(user);
  while (lettersRemain()) {   
    playLetters(user);
    if (!userPass()) {
        switchUser();
    }
  }
}
