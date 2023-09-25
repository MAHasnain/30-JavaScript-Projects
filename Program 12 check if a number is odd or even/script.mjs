// Program 12 check if a number is odd or even

///           Checking using if else

let x = 3;

if (x % 2 == 0) {
  console.log(`${x} is an even number`);
} else {
  console.log(`${x} is an odd number`);
}

function checking() {
  let val = document.getElementById("checking").value;
  if (val % 2 == 0) {
    document.getElementById("result").innerText = `${val} is an Even number`;
  } else {
    document.getElementById("result").innerText = `${val} is an Odd number`;
  }
}

//            Checking using ternary operators
function checking2() {
  let val = document.getElementById("checking2").value;
  let res = val % 2 == 0 ? "Even" : "Odd";

  document.getElementById("result2").innerText = `${val} is an ${res} number.`;
}
