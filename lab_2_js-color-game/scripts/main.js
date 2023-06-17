window.onload = function() {
    init();
};

var count = 50;


var numCards = 3;
var gameOver = false;
var colors = [];
var pickedColor;

var easymode = document.querySelector("#easymode");
var hardmode = document.querySelector("#hardmode");
var nightmaremode = document.querySelector("#nightmaremode");

var body = document.querySelector("body");
var cards = document.querySelectorAll(".card");
var colorDisplay = document.getElementById("color-picked");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetDisplay = document.querySelector("#reset span");

function init() {
    mode();
}

function mode(){
    easymode.addEventListener("click", function() {
        numCards = 3;
        easymode.style.backgroundColor = "steelblue";
        easymode.style.color = "white";
        hardmode.style.backgroundColor = "white";
        hardmode.style.color = "#484848";
        nightmaremode.style.backgroundColor = "white";
        nightmaremode.style.color = "#484848";

        initCards();
        reset();
    })
    hardmode.addEventListener("click", function() {
        numCards = 6;
        easymode.style.backgroundColor = "white";
        easymode.style.color = "#484848";
        hardmode.style.backgroundColor = "steelblue";
        hardmode.style.color = "white";
        nightmaremode.style.backgroundColor = "white";
        nightmaremode.style.color = "#484848";
        reset(); 
        initCards();
        reset(); 
    })
    nightmaremode.addEventListener("click", function() {
        numCards = 6;
        easymode.style.backgroundColor = "white";
        easymode.style.color = "#484848";
        hardmode.style.backgroundColor = "white";
        hardmode.style.color = "#484848";
        nightmaremode.style.backgroundColor = "steelblue";
        nightmaremode.style.color = "white";

        initCards();
        Nightmarereset();  
 
    })
}


function initCards() {
    for (var i = 0; i < cards.length; i++) {
        //add click listeners to cards
        cards[i].addEventListener("click", function() {
            if (gameOver) return;
            //grab color of clicked card
            var clickedColor = this.style.backgroundColor;
            // alert(this.style.backgroundColor);
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetDisplay.textContent = "Play Again"
                changeColors("#FFF");
                body.style.backgroundColor = clickedColor;
                gameOver = true;
                resetButton.style.visibility = "visible";
            } else {
                this.style.opacity = 0;
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}


function Nightmarereset() {
    gameOver = false;
    colors = generateRandomColors(numCards);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color";

    // change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block";
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }

    var interval = setInterval(function() {
        
        if (gameOver == true) {
            body.style.backgroundColor = pickedColor;   
            count = 50; //reset timer
            return;
        }
        count--;
        messageDisplay.textContent = "What's the Color?   " + Math.ceil(count/10) + "s";
        if (count == 0) {
            clearInterval(interval);
            messageDisplay.textContent = "TIMEOUT";
            //cards.style.opacity = 0;
            //body.style.backgroundColor = pickColor;
            resetButton.style.visibility = "visible";
            gameOver = true;
        }
        if ((count +1 )% 10 == 0) {
            body.style.backgroundColor = "#ffffff";
        } else {
            body.style.backgroundColor = "#232323";
            if (gameOver == true) {
                body.style.backgroundColor = pickedColor;    
                for (var i = 0; i < cards.length; i++) {
                    cards[i].style.backgroundColor = "#ffffff";
                }                
            return;
            }
        }

    }, 100);

    resetButton.style.visibility = "hidden";

}

function reset() {
    gameOver = false; 
    colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";
}

resetButton.addEventListener("click", function() {
    reset();
})

function changeColors(color) {
    //loop through all cards
    for (var i = 0; i < cards.length; i++) {
        //change each color to match given color
        cards[i].style.opacity = 1;
        cards[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
