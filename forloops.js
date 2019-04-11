console.log("print that hoe -10 to 20")

for (var i = -10; i < 20; i++) {
    console.log(i)
}

console.log("print that hoe even numbers 10 to 40")

// for (var i = 10; i <= 40; i+=2) {
//     console.log(i);
// }
// the if statement is checking if something is even
for (var i = 10; i <= 40; i += 1) {
   if(i % 2 === 0) {            
       console.log(i);
   }
    
}

console.log("print that hoe odd numbers between 300 to 333")
// the if statement is checking if something is odd
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("print that hoe all divisible by 5 to 50")
// if statement says check if i is divisble by and check if i is divisble by 3
for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
