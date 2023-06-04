import "./styles.css";
var col = document.getElementById("btn1");
var dot = document.getElementById("dot");
col.addEventListener("click", function () {
  dot.style.backgroundColor = "green";
});

var shape = document.getElementById("btn2");
var squ = document.getElementsByClassName("squ")[0]; // Select the first element with the class 'squ'
shape.addEventListener("click", function () {
  squ.style.clipPath = "polygon(0 0, 0 100%, 100% 100%)";
});
