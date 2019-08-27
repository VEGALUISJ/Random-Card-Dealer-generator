/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let figureup = ["&#9829", "&#9830"];

  let arriba = figureup[Math.floor(Math.random() * figureup.length)];

  console.log("arriba");
};
