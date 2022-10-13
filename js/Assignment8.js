
1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

2. RAW TEXT STRINGS

var StoryText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let X1 = 'Willy the Goblin';
let X2 = 'Big Daddy';
let X3 = 'Father Christmas';

const insertY = ['the soup kitchen', 'Disneyland','the White House'];
let Y1 = 'the soup kitchen';
let Y2 = 'Disneyland';
let Y3 = 'the White House';

const insertZ = []
let Z1 = 'spontaneously combusted'
let Z2 = 'melted into a puddle on the sidewalk'
let Z3 = 'turned into a slug and crawled away'

3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', function result(){
    const initialText = 'click';
});


function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}