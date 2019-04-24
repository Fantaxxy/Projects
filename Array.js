// using a for loop her because we want to start at the end instead of a for each
// -1 is used because the length is always 1 greater than the greatest index
function printReverse(arr){
    for(var i = arr.length - 1; i >= 0 ; i--){
        // now we will console.log arr with the index of i
        // it should print out 5 in this case
        console.log(arr[i]);
    }

}

// this is the index and i will start at 3
printReverse([3,6,3,5]);

// isUiniform
// write a function which takes and array as an arguement and returns true if all elements in the array are identicle
// we use a for loop here becuase a forEach will only run the intial function and next function and not iterate through the same way?

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}

// sumArray
function sumArray(arr) {
    // we are starting total at 0
    var total = 0;
    // looping through the array
    arr.forEach(function(element) {
        // take every element and add it to total
        total += element;
    });
    // return total at the end
    return total;
}

// max()

function max(arr) {
    var max = arr [0];
    for(var i = 1; i < arr.length; i++) {
      if (arr[i] > max){
          max = arr[i];
      }  
    }
    return max;
}  