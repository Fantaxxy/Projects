// // isEven
// function isEven(num) {
//      // return true if even
//     if (num % 2 === 0){
//         return true;
//     }
//     // return false otherwise
//         else {
//             return false
//     }
// }
// isEven
function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    // define a result variable
    var result = 1;
    // calculate factorial and store value in result
    for(var i = 2; i <= num; i++){
        // result = result * i;
        result *= i;
    }
    // retunr the result in a variable
    return result;
}


function kebabToSnake(str) {
    // replace all dashes "-" with underscores "_"
    var newStr = str.replace(/-/g , "_");
    // return str
    return newStr;
}











