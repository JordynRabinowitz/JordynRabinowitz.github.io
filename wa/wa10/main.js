// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 200 fahrenheit outside, but :insertx: had to walk to meet his friends. When they got to :inserty:, they were dripping in sweat, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and sunk right through the sidewalk"

const insertX = ["the tooth fairy","Santa","Big foot"]

const insertY = ["the mall","fairy land","the haunted mansion"]

const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","lit on fire"]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14.0) + ' stone';
    const temperature =  Math.round((94 - 32.0) * (5.0/9.0)) + ' centigrade';
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}