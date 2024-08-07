
document.getElementById("btn").addEventListener("click", function () {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.documentElement.style.setProperty("--random-color", randomColor);
});
