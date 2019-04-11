// var answer = prompt("We there?");

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("We there?");  
// }

// alert("N---- we made it!");
// Version 2

var answer = prompt("We there?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("We there?");
}

alert("N---- we made it!");