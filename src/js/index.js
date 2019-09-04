/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onclick = function() {
  document.getElementById("var2").innerHTML = generatenumber();
  document.getElementById("var1").innerHTML = generateicon();
  document.getElementById("var3").innerHTML = generateicon();
  console.log("Hello World!! ");
};

var generatenumber = function() {
  let a = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

  let number = a[Math.floor(Math.random() * a.length)];

  return number;
};

var generateicon = function() {
  let b = ["&#9829", "&#9830", "&#9827", "&#9824"];

  let symbol = b[Math.floor(Math.random() * b.length)];

  let up = document.getElementById("var1");
  let down = document.getElementById("var3");

  if (symbol === "&#9829" || symbol === "&#9830") {
    up.classList.toggle("TEMP");
    down.classList.toggle("TEMP");
  }

  up.innerHTML = symbol;
  down.innerHTML = symbol;

  return symbol;
};
