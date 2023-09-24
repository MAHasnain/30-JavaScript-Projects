// Swapping of Two Numbers without using temporary variable 

let a = parseInt(prompt("Please enter the first value"));
let b = parseInt(prompt("Please enter the second value"));
                                                 // prompt me value string ati h jis ko Number me convert krne k liye parseInt ka use kiya jata h

console.log(`1st value is ${a}, \n 2nd value is ${b}`);

a = a + b; /// 5
b = a - b;
a = a - b;  


console.log(`After swapping1st value is ${a}, \n 2nd value is ${b}`);




