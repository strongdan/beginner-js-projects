let currentScore = 0;
const cards = {'two' : 2,
               'three' : 3,
               'four' : 4,
               'five' : 5,
               'six' : 6,
               'seven' : 7,
               'eight' : 8,
               'nine' : 9,
               'ten' : 10,
               'jack' : 10,
               'queen' : 10,
               'king' : 10,
               'ace' : [1, 11] }

const randomCard = (cards) => {
  // random value between 1 and 13 (size of object)
  let randNum = Math.floor(Math.random() * 14)
  // returns random element from cards as an array
  if (Object.keys(cards)[randNum] === 'ace') {
    return Object.keys(cards)[randNum][Math.floor(Math.random())];
  }
  return Object.keys(cards)[randNum];
}

const initialDeal = () => {
  // deals two cards to start the game
  card1 = randomCard(cards);
  card2 = randomCard(cards);
  // returns object with card names and values
  return { card1, card2 };
}

const dealCard = () => {
  // if user requests additional card, card is drawn and score is incremented
  let newCard = randomCard(cards);
  // returns card and value
  return { newCard }
}

const playGame = () => {
  console.log('Welcome to blackjack!');
  firstCards = initialDeal();
  currentScore += firstCards[card1].val + firstCards[card2].val;
  console.log(`Your first cards are: ${firstCards[card1]} and ${firstCards[card2]});
  console.log(`Your score is ${currentScore});
  dealCard();
}




playGame();
