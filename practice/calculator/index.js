function add() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = +document.getElementById("num2").value;
  document.getElementById("result").value = num1 + num2;
}
document.getElementById("sum").addEventListener("click", add);

function sub() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = +document.getElementById("num2").value;
  document.getElementById("result").value = num1 - num2;
}
document.getElementById("sub").addEventListener("click", sub);

function mul() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = +document.getElementById("num2").value;
  document.getElementById("result").value = num1 * num2;
}
document.getElementById("mul").addEventListener("click", mul);

function div() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = +document.getElementById("num2").value;
  document.getElementById("result").value = num1 / num2;
}
document.getElementById("div").addEventListener("click", div);

function percentage() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = +document.getElementById("num2").value;
  document.getElementById("result").value = (num1 / num2) * 100 + "%";
}
document.getElementById("percentage").addEventListener("click", percentage);

function power() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = +document.getElementById("num2").value;
  document.getElementById("result").value = num1 ** num2;
}
document.getElementById("power").addEventListener("click", power);

function clear() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}
document.getElementById("clear").addEventListener("click", clear);
