var style, allDOM = document.all;

for(var i = 0, len = allDOM.length; i < len; i++){	
	style = window.getComputedStyle(allDOM[i]);
	if(style["backgroundColor"] && style["backgroundColor"] == "rgb(255, 255, 255)"){
		allDOM[i].style.backgroundColor = "transparent";
	}
}
