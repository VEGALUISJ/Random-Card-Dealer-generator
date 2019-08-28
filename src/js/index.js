/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let a = ["3", "8", "5", "J", "K", "A"];

  let number = a[Math.floor(Math.random() * a.length)];

  document.getElementById("var2").innerHTML = number;

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

  console.log(number);
  console.log(symbol);
};
