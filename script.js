function compute() {
  r = document.getElementById("rate").value;
  p = document.getElementById("principal").value;
  y = document.getElementById("years").value;
  result = p * r * y;
  console.log(result);
  toShow = `If you deposit ${p}\nat an interest rate of ${r}%\nYou will revieve an amount of ${result}\nin the year ${
    2021 + Number(y)
  }`;
  document.getElementById("result").innerText = toShow;
}

function updateRate() {
  r = document.getElementById("rate").value;
  console.log(r);
  document.getElementById("rate-result").innerText = r + "%";
}
