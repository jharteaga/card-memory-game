import { images } from './cards';

const timerText = document.querySelector('.container__header__timer');
const cards = document.querySelectorAll('.container__cards__card');
let cardSelected1,
  cardSelected2,
  cardsNotPlaying = [],
  count = 0,
  seconds = 0,
  minutes = 0,
  hours = 0,
  t,
  cardsMatched = 0;

init();

//Initiate Game
function init() {
  images.sort(() => 0.9 - Math.random());
  for (let i = 0; i < cards.length; i++) {
    const imgChild = cards[i].childNodes[1];

    const card = document.createElement('img');
    card.setAttribute('src', images[i].image);
    card.className = 'container__cards__card__img';
    cards[i].appendChild(card);
  }

  addCardEvents(cards);

  timer();
}

//Timer Event
function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  timerText.textContent =
    (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
    ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
    ':' +
    (seconds > 9 ? seconds : '0' + seconds);

  timer();
}

function timer() {
  t = setTimeout(add, 1000);
}

//Block Board Game
function blockedBoard() {
  cardsNotPlaying = [...cards].filter(
    (card) => card !== cardSelected1 && card !== cardSelected2
  );

  cardsNotPlaying.forEach((card) => {
    card.classList.add('container__cards__card--blocked');
  });
}

//Enable Board Game
function enableBoard() {
  cardsNotPlaying.forEach((card) => {
    card.classList.remove('container__cards__card--blocked');
  });
}

//Assign pair to check them
function assignPairToCheck(element) {
  if (count === 0) {
    cardSelected1 = element;
    count++;
  } else if (count === 1) {
    cardSelected2 = element;
    blockedBoard();
    checkPair();
  }
}

//Check pairs
function checkPair() {
  const card1 = images.filter(
    (img, index) => `card${index + 1}` === cardSelected1.id
  );
  const card2 = images.filter(
    (img, index) => `card${index + 1}` === cardSelected2.id
  );

  if (card1[0].image === card2[0].image) {
    pairFound();
  } else {
    incorrectPair();
  }
}

//Pair Found
function pairFound() {
  cardSelected1.classList.remove('container__cards__card--flip-front');
  cardSelected1.classList.remove('container__cards__card--flip-back');

  cardSelected2.classList.remove('container__cards__card--flip-front');
  cardSelected2.classList.remove('container__cards__card--flip-back');

  cardSelected1.classList.add('container__cards__card--found');
  cardSelected2.classList.add('container__cards__card--found');

  cardsMatched += 2;

  isFinished();

  reset();
}

function isFinished() {
  if (cardsMatched === cards.length) {
    clearTimeout(t);
  }
}

//Incorrect pair
function incorrectPair() {
  setTimeout(() => {
    flipEvent(cardSelected1);
    flipEvent(cardSelected2);
  }, 800);
}

//Add events listeners
function addCardEvents(elements) {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      flipEvent(element);
    });
  });
}

//Flip Event
function flipEvent(element) {
  element.classList.toggle('container__cards__card--flip-front');
  element.classList.toggle('container__cards__card--flip-back');

  setTimeout(() => {
    if (element.classList.contains('container__cards__card--flip-back')) {
      element.childNodes[1].style.visibility = 'hidden';
      element.childNodes[3].style.visibility = 'visible';
      assignPairToCheck(element);
    } else {
      element.childNodes[1].style.visibility = 'visible';
      element.childNodes[3].style.visibility = 'hidden';
      reset();
    }
  }, 360);
}

//Reset event
function reset() {
  count = 0;
  enableBoard();
  cardSelected1 = null;
  cardSelected2 = null;
  cardsNotPlaying = [];
}
