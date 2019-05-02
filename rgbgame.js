// we created the array colors so we could loop through them
// we then loop through squares to change the background color by accessing the colors array

var colors = generateRandomColors(6);
// the hard coded array values are replaced by the function (bottom of page) to randomly generate colors = generateRandomColors()
// the parameter 6 is telling us that is the number of random items we want to generate

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
// this var above is a function that will be defined at the bottom section
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add inital colors to squares
   squares[i].style.backgroundColor = colors[i];

//    add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked sqaure
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Finesse"
            // we are basically referecning the function changeColors below with the parameter or thing to be changed = color
            changeColors(clickedColor);
            // notice that clicked color is defined within the click function
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Hell Nawww"
        }
    });
    
}

function changeColors(color) {
        // loop through all squares
        for (var i = 0; i < squares.length; i++) {
         // change each color to match given color
         squares[i].style.backgroundColor = color;
        }
       
}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length)
    // math.random is used to generate a random number in colors.length
    // floor is used make it a whole number
    // last we save this to a variable to acess this variable to access that array from the index
    // so var random is the variable
    return colors[random];
    // so this function will return the colors array but now it will return random color values from 0 to 5
}

function generateRandomColors(num) {
    // we are going to make an array which is empty
    var arr = []
    // add num random colors to array, we use a loop to go through the parameter 6 times
    // repeat num times
    for (var i = 0; i < num; i++){
    // so here we are pushing
        arr.push(randomColor())
    //  get random color and push into array
    //  arr. is builing the array AND push is pulling the function randomColor
    // combined and array is being built from random colors
    }
    // return array
    return arr;
}

// the purpose of this function is to generate a color and to make the code cleaner
function randomColor (){
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    // we add 1 to 255 to get 256 because we are rounding down and the greatest number possible should be
    // we saved the random color for red to r
    var g = Math.floor(Math.random() * 256)
    // a green from  0 - 255
    var b = Math.floor(Math.random() * 256)
    // a blue from 0 - 255
    return "rgb(" + r + ", " + g + ", " + b + ")";
    // we are return the string of r , g, b by multiplying rgb against each individual string
    // adding spaces after commas fixes a bug with the matching game
}