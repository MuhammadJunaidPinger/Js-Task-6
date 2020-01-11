function saveNow(){
    var saveNow = document.getElementById("save")
    saveNow.value = alert("you clicked the right link")
}

function saveNowButton(){
    var saveNow = document.getElementById("saved")
    saveNow.value = alert("you clicked the right button")
}
function greetME() {
    var greet1 = document.getElementById("greet")
    var user = prompt("Enter your Name")
    greet1.value =  alert("Hello " + '\n' +user)
}

function greetMe2() {
    var greet2 = document.getElementById("greet2")
    var user = prompt("Enter your name")
    greet2.value = alert("hello " + "\n" + user + '\n' + "lenght of user input is " + user.length)
}
function purchasingAlert() {
    var images = document.getElementsByTagName("img")
    images.value = alert("Thanks for purchasing from us")
}

function mouseOver(image) {
    // var image = document.getElementById("pic1")
    image.src = "./images/Bulb_On.jpg"
}
function mouseOut(image) {
    image.src = "./images/Bulb_off.jpg"
}

function makeBig(img) {
 img.style.width = "15%"
}
function backNormal(img) {
    img.style.width = "10%"
}