import cardData from './cardText.js';

var container = document.getElementById('card-container');
let cards = container.childNodes;

for (let i = 0; i < cardData.length; i++) {
  console.log(cardData[i]);
  // cards[i].append('hello');
  let title = document.createElement('h1');
  title.append(cardData[i].title);
  let text = document.createElement('p');
  text.append(cardData[i].text);
  let button = document.createElement('button');
  button.append('Learn More');
  button.className = "primary-button";
  document.getElementById(cardData[i].title.toLowerCase()).append(title, text, button);
}