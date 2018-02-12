const newHangman =  [ [ '  -----------        ' ],
                      [ '  |         |        ' ],
                      [ '  |         |        ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ],
                      [ '  |                  ' ] ];

const completedHangman = [ [ '  -----------        ' ],
                           [ '  |         |        ' ],
                           [ '  |         |        ' ],
                           [ '  |         0        ' ],
                           [ '  |        /|\       ' ],
                           [ '  |         |        ' ],
                           [ '  |        / \       ' ],
                           [ '  |                  ' ] ];

let playHangman =  [ [ '  -----------        ' ],
                     [ '  |         |        ' ],
                     [ '  |         |        ' ],
                     [ '  |                  ' ],
                     [ '  |                  ' ],
                     [ '  |                  ' ],
                     [ '  |                  ' ],
                     [ '  |                  ' ] ];

const hangmanWords = ['jazz', 
                      'buzz', 
                      'jazzed', 
                      'jazzy', 
                      'buzzed', 
                      'fuzz', 
                      'jinx', 
                      'fizz', 
                      'buzzing', 
                      'fuzzy', 
                      'puff',
                      'jiff',
                      'buff',
                      'quiz',
                      'huff',
                      'zine',
                      'duff',
                      'zit' ];

const getNewWord = () => {
  // retrieve random word from hangmanWords
  return hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
}

const guessLetter = (word) => {
  // allows user to guess letter and returns true or false based on current word 
  let letter = prompt('Please guess a letter.');
  return word.includes(letter);
}

const printHangman = () => {
  // print playHangman array
  console.log(playHangman);
}

const printBlankWord = (word, guessLetter = '') => {
  // print blanks for current word, filling in correctly guessed letters
  word = word.split('');
  for (let i = 0; i < word.length; i++) {
    word[i] = '_';  
  }
  word = word.join(' ');
  if (guessLetter()) {
    // if letter is correct, fill in blanks 
  }
}

const addToHangman = () => {
  // add new row to hangman 
}

const fillWord = () => {
  // add correctly guessed letters to blanks
  printWord();
}

const wonGame = () => {
  // checks if word is complete and hangman not complete
  // returns true or false
}

const lostGame = () => {
  // checks whether length of word is equal to the length of the guessed word 
}

const playGame = () => {
  // starts game and plays through to end
  playHangman = newHangman;
  let word = getNewWord();
  while (!wonGame()) {
    printHangman();
    printBlankWord(word);
    guessLetter(); // users get seven guesses
    if (!checkLetter()) {
      drawHangman();  
      if (lostGame()) {
        console.log('Sorry. You lost.');
        break;
      }     
    } else {
      fillWord(); 
    }
  }
  console.log('You won!');
}

playGame();
