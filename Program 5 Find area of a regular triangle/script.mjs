///  To Find area of a regular triangle
///  General formula :  S = (a + b + c)/2      area = square root of S(s-a)*(s-b)*(s-c)     (a : side1 , b : side2 , c : side3)

let a = prompt("Please enter the side1 value");
let b = prompt("Please enter the side2 value");
let c = prompt("Please enter the side3 value");

const s = (a + b + c) / 2;
const temp = s * (s-a)*(s-b)*(s-c);

const area = Math.sqrt(temp);

console.log(`side1 : ${a}, side2 : ${b}, side3 : ${c} and Area of the triangle is ${area}`);
