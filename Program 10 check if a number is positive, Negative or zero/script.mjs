//          Using Math.sign() method.
//          syntax : Math.sign(x);

function check() {
  let val = document.getElementById("data").value;
  // let res = Math.sign (val);
  // document.getElementById('res').innerText = res
  if (val < 0) {
    res = `${val} is negative number`;
  } else if (val > 0) {
    res = `${val} is Positive number.`;
  } else if (val == 0) {
    res = `${val} is zero.`;
  } else {
    res = `${val} is Not a Number.`;
  }

  document.getElementById("res").innerText = res;
}
