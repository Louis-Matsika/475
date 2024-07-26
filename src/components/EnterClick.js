import React from "react";

const enterPress = document.getElementById("enterable");
enterPress.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});

//export default enterPress;