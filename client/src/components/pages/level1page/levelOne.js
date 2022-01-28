// import React from "react";

// export default class Example extends React.Component {

// }

function Random() {
  // var rnd = Math.floor(Math.random() * 20000000000);
  var rnd = Math.floor(Math.random() * 20) + 1;
  document.getElementById("tb").value = rnd;
}
