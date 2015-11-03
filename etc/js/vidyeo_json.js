var pssVD;

(function(){
	pssVD = document.createElement('video');	
	pssVD.style.position = 'absolute';
	pssVD.style.right = 0;
	pssVD.style.bottom = 0;
	pssVD.style.width = '100%';
	pssVD.style.height = '100%';
	pssVD.style.opacity = '0.1';
	pssVD.style.backgroundColor = '#fff';
	pssVD.style.zIndex = 0;
	pssVD.autoplay = true;
	pssVD.rootURL = 'http://172.10.12.61:9090/media/';
	pssVD.skip = function(prev){
		if(prev === 1){
			this.currentPlay -= 1;
		}else{
			this.currentPlay += 1;
		}
		if(this.filelist && this.filelist[this.currentPlay]){
			this.src = this.rootURL + this.filelist[this.currentPlay].name;
		}else{
			this.src = this.rootURL + this.filelist[0].name;
			this.currentPlay = 0;
		}
	};
	
	pssVD.addEventListener('error', function(evt){
		if(this.filelist[this.currentPlay].substr(0,4) != 'http'){
			this.src = this.rootURL + this.filelist[this.currentPlay];
		}
	}, false);
		
	pssVD.addEventListener('ended', function(){
		pssVD.currentPlay += 1;
		if(pssVD.filelist[pssVD.currentPlay]){
			pssVD.src = pssVD.filelist[pssVD.currentPlay];
		}else{
			pssVD.src = pssVD.filelist[0];
			pssVD.currentPlay = 0;				
		}
	}, false);
	document.body.insertBefore(pssVD, document.body.firstChild);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'http://172.10.12.61:9090/git/something/etc/json/mlist.json', true);
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			pssVD.filelist = JSON.parse(xmlhttp.responseText);			
			pssVD.src = pssVD.filelist[0];  
			pssVD.currentPlay = 0;
		}
	};
	xmlhttp.send(null);
	var style, allDOM = document.all;
	for(var i = 0, len = allDOM.length; i < len; i++){	
		style = window.getComputedStyle(allDOM[i]);
		if(style["backgroundColor"] && style["backgroundColor"] == "rgb(255, 255, 255)"){
			allDOM[i].style.backgroundColor = "transparent";
		}
	}	
})();

window.addEventListener('keydown', function (evt){
	if(evt.altKey){
		var opc = +pssVD.style.opacity;
		switch(evt.keyCode){
			case 48:
				pssVD.style.zIndex = +pssVD.style.zIndex ? 0 : 1;
				pssVD.controls = !pssVD.controls;
				break;
			case 189:
				pssVD.style.opacity = opc == 0 ? opc : opc - 0.05;
				break;
			case 23:
				pssVD.style.opacity = opc == 1 ? opc : opc + 0.05;
				break;
			case 79:
				pssVD.select.click();
				break;
			case 33:
				pssVD.skip(true);
				break;										
			case 34:
				pssVD.skip();
				break;
			case 37:
				if(pssVD.currentTime - 5 < 0){
					pssVD.currentTime = 0;
				}else{
					pssVD.currentTime -= 5;
				}
				break;
			case 39:
				if(pssVD.currentTime + 5 > pssVD.duration){
					pssVD.currentTime = pssVD.duration - 1;
				}else{
					pssVD.currentTime += 5;
				}
				break;
			case 38:
				pssVD.volume += 0.1;
				break;
			case 40:
				pssVD.volume -= 0.1;
				break;
			case 96:
				if(pssVD.paused){
					pssVD.play();
				}else{
					pssVD.pause();
				}
				break;
			case 98:
				pssVD.style.top = parseInt(pssVD.style.top) + 100 + 'px';
				break;
			case 100:	
				pssVD.style.left = parseInt(pssVD.style.left) - 100 + 'px';
				break;
			case 101:
				pssVD.style.left = pssVD.style.top = 0;
				break;
			case 102:	
				pssVD.style.left = parseInt(pssVD.style.left) + 100 + 'px';
				break;
			case 104:		
				pssVD.style.top = parseInt(pssVD.style.top) - 100 + 'px';
				break;
			case 188:
				pssVD.style.width = parseInt(pssVD.style.width) - 10 + '%';
				pssVD.style.height = parseInt(pssVD.style.height) - 10 + '%';
				break;
			case 190:
				pssVD.style.width = parseInt(pssVD.style.width) + 10 + '%';
				pssVD.style.height = parseInt(pssVD.style.height) + 10 + '%';
				break;
			default:
				break;
		}
	}
	return false;
},false); 