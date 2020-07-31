var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImgSrc = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomDiceImgSrc);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImgSrc2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomDiceImgSrc2);


if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎈Player 1 wins!";
}

if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎈Player 2 wins!";
}

if(randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!🎭";
}
