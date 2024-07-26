import React from "react";
import bubText from "./bubText";

//it's me
function Louis(){
	return(
		<div id="Louis-box">
			<img alt="Point mascot 'Louis'" id="Louis" src="Louis-mini.png"></img>
            <div id="speech-bub"><p id="bub-text">{bubText.Text}</p></div>
            {/* <img alt="speech bubble" id="speech-bub" src="speech bub.png"></img> */}
		</div>
	);
};

export default Louis;
