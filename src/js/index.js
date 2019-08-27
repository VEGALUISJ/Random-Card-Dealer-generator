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

  document.getElementById("var1").innerHTML = symbol;
  document.getElementById("var3").innerHTML = symbol;

  console.log(number);
  console.log(symbol);
};
