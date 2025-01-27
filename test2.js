// var myMessage = document.getElementById("message");
// function showMessage(){
//     myMessage.className = "show";
// }
// setTimeout(showMessage, 3000);

var colourChanger = document.getElementById("colourchanger");
var colours =["red", "blue", "green", "pink"];
var counter = 0;

function changeColour(){
    if(counter >= colours.length){
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}
// change colour in every 3000 sec
var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function(){
    clearInterval(myTimer);
    colourChanger.innerHTML = "timer stopped";
};