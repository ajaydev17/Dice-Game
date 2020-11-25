// Create a random number 1.
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

// Select an random dice image between 1 to 6 for left dice.

var imgSelect = document.querySelector('.img1')
imgSelect.setAttribute("src", "images\\dice"+ randomNumber1 +".png");

// Create a random number 2.
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Select an random dice image between 1 to 6 for right dice.

var imgSelect = document.querySelector('.img2')
imgSelect.setAttribute("src", "images\\dice"+ randomNumber2 +".png");


var resultText = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    resultText.innerHTML = "Player 1 Wins!🚩";
}
else if (randomNumber1 < randomNumber2) {
    resultText.innerHTML = "Player 2 Wins!🚩";
}
else {
    resultText.innerHTML = "Its a Draw!!!";
}


// Refresh Page
function refreshPage() {
    window.location.reload();
}
