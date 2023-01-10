var button = document.getElementById("addButton");
function handleButtonClick() {alert("Button was clicked!");}
var button = document.getElementById("addButton"); 
button.onclick = handleButtonClick;
window.onload = init;
function init() {var button = document.getElementById("addButton");}
function handleButtonClick() {alert("Button was clicked!");}
li.innerHTML = songName;
function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    alert("adding " + songName);
}    
function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    var li = document.createElement("li"); 
    li.innerHTML = songName;
    var ul = document.getElementById("playlist"); 
    ul.appendChild(li);
}