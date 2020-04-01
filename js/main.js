import { images } from './cards';

const cards = document.querySelectorAll('.container__cards__card');

init();
addCardEvents(cards);

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
}

//Add events listeners
function addCardEvents(elements) {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('container__cards__card--flip-front');
      element.classList.toggle('container__cards__card--flip-back');

      setTimeout(() => {
        if (element.classList.contains('container__cards__card--flip-back')) {
          element.childNodes[1].style.visibility = 'hidden';
          element.childNodes[3].style.visibility = 'visible';
        } else {
          element.childNodes[1].style.visibility = 'visible';
          element.childNodes[3].style.visibility = 'hidden';
        }
      }, 360);
    });
  });
}
