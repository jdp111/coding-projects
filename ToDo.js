
const submits = document.querySelector('#submitter');
const mainList = document.querySelector("#todo");


submits.addEventListener("click",function(){
    
    const input = document.querySelector('input')
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    
    newXButton = document.createElement('button');
    newXButton.innerText = "remove";
    newXButton.classList.add("removeButton");
    
    newItem.append(newXButton);

    mainList.append(newItem);
    input.value = '';
})



mainList.addEventListener('click',function(event){
    event.target.classList.toggle('done');

    if (event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
    }
});





