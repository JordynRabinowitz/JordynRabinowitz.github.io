
let words;
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const color = document.querySelector('.color');
const story = document.querySelector('.story');
randomize.addEventListener('click', result);
color.addEventListener('click', result2);

function result(){
    console.log("yes");
    if(customName.value !== '') {
        const name = customName.value;
        words = "Hello " + name + '!';
    }
    else{
        words = "Please enter a name";
    }
      story.textContent = words;
}
function result2(){
    document.body.style.background = "plum";
}