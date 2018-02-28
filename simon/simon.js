const notes = { 'E4' : [329.63, 'blue'] // E-note (blue, lower right)
                'C#4' : [277.18, 'yellow'] // C♯-note (yellow, lower left)
                'A3' : [220.00, 'red'] // A-note (red, upper right)
                'E3' : [164.81, 'green'] // E-note (green, upper left, an octave lower than blue) 
              }

let computerSequence = { }

const playNote = (note) => {
  let context = new window.webkitAudioContext(); // create new audio context
  let osc = context.createOscillator(); // create new oscillator
  osc.frequency.value = notes[note]; 
  osc.connect(context.destination);
  osc.start(0); 
}

const playSequence = (level) => {
  // returns random sequence of notes, with length based on level 
  switch (level) {
  case 1:
    console.log(`Level is ${level}`);
    return randomNote();
    break;
  case 2:
    console.log(`Level is ${level}`);
    break;
  case 3:
    console.log(`Level is ${level}`);
    break;
  case 4:
    console.log(`Level is ${level}`);
    break;
  case 5:
    console.log(`Level is ${level}`);
    break;
  case 6:
    console.log(`Level is ${level}`);
    break;
  case 7:
    console.log(`Level is ${level}`);
    break;
  case 8:
    console.log(`Level is ${level}`);
    break;
  case 9:
    console.log(`Level is ${level}`);
    break;
  case 10:
    console.log(`Level is ${level}`);
    break;
  default:
    console.log('Need a level betwen 1 and 10');
  }
}

const randomNote = (object) => {
  // returns pseudo-random number between 1 and 4 
    let result;
    let count = 0;
    for (var prop in obj)
       if (Math.random() < 1/++count)
        computerSequence[result] = prop;
    return computerSequence;
}

const userGuess = () => {
  // allows user to press buttons replicating computer sequence 
  // returns true if correct, false otherwise
}

const playGame = (level=1) => {
  // starts and plays game
  if (userGuess()) {
    level += 1; 
    if (level > 10) {
      console.log('You won!');
      playGame();
    }
    playGame(level);
  } else {
    playGame(); 
  }
}
