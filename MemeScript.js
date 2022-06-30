
let submit = document.querySelector('.subbutt');

function AddMemeFunc(){
    
    const topText = document.querySelector('#top').value;  //this block sets the values for the captions
    const botText = document.querySelector('#bottom').value;
    const topElement = document.createElement('p');
    const botElement = document.createElement('p');
    topElement.innerText = topText;    //finishes creating element for caption
    botElement.innerText = botText;
    topElement.classList = 'TopText';   //set the class for captions
    botElement.classList = 'BotText';
    
    const col = document.querySelector('.color').value;  //this block sets text color based on input
    console.log(col);
    topElement.style.color = col;
    botElement.style.color = col;

    document.querySelector('#top').value = '';  //clears the top and bottom text boxes
    document.querySelector('#bottom').value = '';


    const pic = document.querySelector('#avatar');  //gets user pic
    const newPic = document.createElement('img');   

    var canvas = document.createElement('canvas'); //text to create a canvas to draw on
    var ctx = canvas.getContext('2d');

    var reader = new FileReader();   //this block converts the local file to a form that can be drawn directly to html display
    reader.onload = function() {
        newPic.src = reader.result;
    };
    reader.readAsDataURL(pic.files[0]);


    const newMeme = document.createElement('div');

    pic.value = '';  //clears the user file from the page

    newPic.width = 500; //resizes image with ratio

    ctx.drawImage(newPic,100,100);  //draws image
 
    //newMeme.insertAdjacentText('text here');
    
    newMeme.append(topElement); //adds full meme (text and pic) to div
    newMeme.append(newPic);
    newMeme.append(botElement);


    if (topElement.innerText.length > 24){    //these two if statements semi-successfully block text from going out of bounds from the meme
        topElement.style.fontSize = '30px';
        topElement.style.top = '70px';
        if (topElement.innerText.length >35){
            topElement.style.fontSize = '20px';
            topElement.style.top = '60px';
        }
    }

    if (botElement.innerText.length > 24){
        botElement.style.fontSize = '30px';
        botElement.style.bottom = '80px';
        if (botElement.innerText.length >35){
            botElement.style.fontSize = '20px';
            botElement.style.bottom = '70px';
        }
    }

    document.querySelector('body').append(newMeme);

}


submit.addEventListener('click', function(e){
    e.preventDefault();
    AddMemeFunc();

});