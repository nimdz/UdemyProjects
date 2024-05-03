var randomNumber1=Math.floor(Math.random()*6)+1;

var diceImg1="dice" + randomNumber1 + ".png";

var diceSrc1="images/" +diceImg1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", diceSrc1)

var randomNumber2=Math.floor(Math.random()*6)+1;

var diceImg2="dice" + randomNumber2 + ".png";

var diceSrc2="images/" +diceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", diceSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }