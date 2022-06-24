const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    console.log(index);
    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}


let shuffledColors = shuffle(COLORS);
let runs = 0;
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", function(e){
     if (runs){
      console.log('click too');
     } else{
      handleCardClick(e);
     }
    });

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!




function handleCardClick(event) {

  event.target.classList.add('vis');            //this class sets the card to be visible 
  event.target.setAttribute('id','selected');   //this shows which card is selected until two cards are selected

  if (document.querySelectorAll('#selected').length === 2){       //when two cards are selected, run this code

    runs = 1;


    const firstCard = document.querySelectorAll('#selected')[0];      
    const secondCard = document.querySelectorAll('#selected')[1];
    firstCard.removeAttribute('id');                              //resets selected cards, so user is free to select 2 more
    secondCard.removeAttribute('id');


    if (firstCard.classList.value === secondCard.classList.value){   //checks for match
      console.log('matched!');
      runs=0

    }else{
      setTimeout(function(){          //my special function for preventing premature clicks, implements variable "runs" to show if the code is pausing or not
      runs=0
      console.log('no match!');
      firstCard.classList.remove('vis');
      secondCard.classList.remove('vis');
      },1000);
    }
    
    if (document.querySelectorAll('.vis').length === 10){
      alert('You Win!')
    }
  }
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}



// when the DOM loads
createDivsForColors(shuffledColors);

/* */