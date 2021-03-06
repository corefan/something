var pssVD;
window.onload = function(){
	var select = document.createElement('input');
	select.type = 'file';
	select.multiple = true;
	select.style.left = '-300px';
	select.style.top = '-300px';
	select.addEventListener('change', function(evt){
		pssVD.filelist = this.files;
		pssVD.src = pssVD.rootURL + pssVD.filelist[0].name;
		pssVD.currentPlay = 0;
	}, false);
	pssVD = document.createElement('video');
	select.style.position = pssVD.style.position = 'absolute';
	pssVD.style.left = 0;
	pssVD.style.top = 0;
	pssVD.style.width = '100%';
	pssVD.style.height = '100%';
	pssVD.style.opacity = '0.1';
	pssVD.style.backgroundColor = '#fff';
	pssVD.style.zIndex = 0;
	pssVD.autoplay = true;
	pssVD.rootURL = 'http://localhost:9090/media/';
	pssVD.select = select;
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
		if(this.error.code == 4)
		{
			pssVD.currentPlay += 1;
			if(this.filelist && this.filelist[this.currentPlay]){
				this.src = this.rootURL + this.filelist[this.currentPlay].name;
			}
		}else{
			console.log(this.error.code);
		}
	}, false);
	pssVD.addEventListener('ended', pssVD.skip, false);
	document.body.appendChild(select);
	document.body.insertBefore(pssVD, document.body.firstChild);
};
window.addEventListener('keydown', function (evt){
	if(evt.altKey){
		var opc = +pssVD.style.opacity;
		console.log(evt.keyCode);
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