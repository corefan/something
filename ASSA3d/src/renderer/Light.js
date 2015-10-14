

/*
 * @author: SKKUASSA
 */

ASSA3d.Light = function(r,g,b){
	
	ASSA3d.LC.call(this);
	
	this.r = (r !== undefined)? r: 127;
	this.g = (g !== undefined)? g: 127;;
	this.b = (b !== undefined)? b: 127;;
	
	
};

// 프로토타입 상속
ASSA3d.Light.prototype = new ASSA3d.LC();
ASSA3d.Light.prototype.constructor = ASSA3d.Light;



