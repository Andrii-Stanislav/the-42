import { submitForm } from './services';

const photosBox = document.querySelector('#photos-box');
const form = document.querySelector('#select-form');
const largeImg = document.querySelector('#img-large');

photosBox.addEventListener('click', setLargeImg);
form.addEventListener('change', selectInput);
form.addEventListener('submit', submitForm);
//
function selectInput(event) {
  const { variant, quantity } = event.target.dataset;

  switch (variant) {
    case 'red':
      photosBox.classList.add('red');
      photosBox.classList.remove('green');
      photosBox.classList.remove('blue');

      largeImg.src = document.querySelector('img[data-color="red"]').src;
      break;
    case 'green':
      photosBox.classList.add('green');
      photosBox.classList.remove('red');
      photosBox.classList.remove('blue');

      largeImg.src = document.querySelector('img[data-color="green"]').src;
      break;
    case 'blue':
      photosBox.classList.add('blue');
      photosBox.classList.remove('red');
      photosBox.classList.remove('green');

      largeImg.src = document.querySelector('img[data-color="blue"]').src;
      break;
  }
}

function setLargeImg(event) {
  largeImg.src = event.target.src;
}
