import React from "react";
//let bubText = "I'm ready to go! enter a fact to check in the search box."
const bubText = {
    Text: "I'm ready to go! Enter a fact to check in the search box.",
    
    get getBubText() {
      return this.Text;
    },

    set changeBub(newText){
        this.Text = newText;
    }
  };
  

export default bubText;
