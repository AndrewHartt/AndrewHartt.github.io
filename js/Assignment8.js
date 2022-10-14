


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



var StoryText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['The Greek Freak','LeKing','Slim Reaper'];


const insertY = ['The Court', 'The Deer District','The Stadium'];


const insertZ = ['got their heads in the game and dropped some easy triple doubles on the opposition','got their heads in the game and posterized some pour souls','got their heads in the game and Crossed Up everyone there with unrivaled moves'];








randomize.addEventListener('click', result);




function result() {

    let NewStory = StoryText;
    let XItem = randomValueFromArray(insertX);
    let YItem = randomValueFromArray(insertY);
    let ZItem = randomValueFromArray(insertZ);
    
    NewStory = NewStory.replaceAll(':insertx:', XItem);
    NewStory = NewStory.replaceAll(':inserty:', YItem);
    NewStory = NewStory.replaceAll(':insertz:', ZItem);

  if(customName.value !== '') {
    const name = customName.value;
    NewStory = NewStory.replace('Bob', name);


  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(21.4286) +' stone';
    const temperature =  Math.round(34.4444)+' centigrade';
    NewStory = NewStory.replaceAll('94 fahrenheit', weight);
    NewStory = NewStory.replaceAll('300 pounds', temperature);
    

  }

  story.textContent = NewStory;
  story.style.visibility = 'visible';
}