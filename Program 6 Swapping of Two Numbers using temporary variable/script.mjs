// Swapping of Two Numbers using temporary variable      (swapping => 2 variables ki me stored values ko swap krna)

let a1 = prompt("Please enter the first value");
let b1 = prompt("Please enter the second value");

console.log(`1st value is ${a1}, \n 2nd value is ${b1}`);

let temp;

temp = a1;

a1 = b1;

b1 = temp;

console.log(`after swapping \n 1st value is ${a1}, \n 2nd value is ${b1}`);
