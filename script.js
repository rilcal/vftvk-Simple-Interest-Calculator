function compute() {
  r = document.getElementById("rate").value;
  p = document.getElementById("principal").value;
  if (p < 0) {
    alert("Principal must be a positive number.");
    document.getElementById("principal").focus();
    return;
  } else if (p == 0) {
    alert("Principal must be a positive number.");
    document.getElementById("principal").focus();
    return;
  }
  y = document.getElementById("years").value;
  result = p * r * y * 0.01;
  console.log(result);
  toShow = `If you deposit <span style="background-color: yellow;">${p}</span><br />at an interest rate of <span style="background-color: yellow;">${r}</span>%<br />You will revieve an amount of <span style="background-color: yellow;">${result}</span> <br />in the year <span style="background-color: yellow;">${
    2021 + Number(y)
  }</span>`;
  document.getElementById("result").innerHTML = toShow;
}

function updateRate() {
  r = document.getElementById("rate").value;
  console.log(r);
  document.getElementById("rate-result").innerText = r + "%";
}
