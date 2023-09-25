////         Math.random()
////         Math.random()*(highest - lowest) +1;

let val = Math.random();

// console.log(val);
document.getElementById(
  "val"
).innerText = `result of Math.random => \n "${val}"`;

val = val * (1000 - 1) + 1;

// console.log(val);
document.getElementById(
  "val2"
).innerText = `result of Math.random()*(highest - lowest)+1 => \n "${val}"`;

document.getElementById(
  "val3"
).innerText = `result of Math.random()*(highest - lowest)+1 with "floor" => \n "${Math.floor(
  val
)}"`;

let OTP = Math.random();
// console.log(OTP)
OTP = OTP * 100000;

// console.log(Math.floor(OTP));

document.getElementById(
  "heading"
).innerText = `5 digit OTP with the help Math.floor \n => ${Math.floor(OTP)}`;
