
var deaths = 0;

var solong = new Audio();
solong.src = "solong.wav";

var bleep = new Audio();
bleep.src = "bleep.wav";

var bleep2 = new Audio();
bleep2.src = "bleep2.wav";

var wrongsound = new Audio();
wrongsound.src = "wrong.wav";

var Mario = new Audio();
Mario.src = "mario.wav";

var laurel = new Audio();
laurel.src = "laurel.mp3";

function startQ1() {
    document.getElementById("start").style.display = "none";
	document.getElementById("Q1").style.display = "block";
    deaths += 1;
    alert("Get Scammed!")
}

function wrong() {
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Q6").style.display = "none";
    document.getElementById("Q7").style.display = "none";
    document.getElementById("Q8").style.display = "none";
	document.getElementById("wrong").style.display = "block";
    deaths += 1;
}

function heartcount() {

if (deaths <= 1) {
    document.getElementById("heart3").style.display = "none";
} else if (deaths <= 2) {
    document.getElementById("heart2").style.display = "none";
} else if (deaths <= 3) {
    document.getElementById("heart1").style.display = "none";
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Q6").style.display = "none";
    document.getElementById("Q7").style.display = "none";
    document.getElementById("Q8").style.display = "none";
	document.getElementById("wrong").style.display = "none";
    document.getElementById("bad").style.display = "block";
    Mario.play()
}
    
}

function retry() {
    document.getElementById("wrong").style.display = "none";
	document.getElementById("Q1").style.display = "block";
}

function replay() {
    document.getElementById("bad").style.display = "none";
	document.getElementById("start").style.display = "block";
    deaths = 0
    document.getElementById("heart1").style.display = "block";
    document.getElementById("heart2").style.display = "block";
    document.getElementById("heart3").style.display = "block";
}

function alert1(){
    alert("It is possible to win...")
}

function alert2(){
    alert("Look very carefully...")  
}

function alert3(){
    alert("Anything can be a button if you make it...")  
}

function alert4(){
    alert("Think outside the box...")  
}

function victory(){
    document.getElementById("start").style.display = "none";
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Q6").style.display = "none";
    document.getElementById("Q7").style.display = "none";
    document.getElementById("Q8").style.display = "none";
	document.getElementById("wrong").style.display = "none";
    document.getElementById("bad").style.display = "none";
    document.getElementById("victory").style.display = "block";
    
}

function Q1Q2() {
    document.getElementById("Q1").style.display = "none";
	document.getElementById("Q2").style.display = "block";
}

function Q2Q3() {
    document.getElementById("Q2").style.display = "none";
	document.getElementById("Q3").style.display = "block";
}

function Q3Q4() {
    document.getElementById("Q3").style.display = "none";
	document.getElementById("Q4").style.display = "block";
}

function Q4Q5() {
    document.getElementById("Q4").style.display = "none";
	document.getElementById("Q5").style.display = "block";
}

function Q5Q6() {
    document.getElementById("Q5").style.display = "none";
	document.getElementById("Q6").style.display = "block";
}

function Q6Q7() {
    document.getElementById("Q6").style.display = "none";
	document.getElementById("Q7").style.display = "block";
}

function Q7Q8() {
    document.getElementById("Q7").style.display = "none";
	document.getElementById("Q8").style.display = "block";
}
