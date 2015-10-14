
/*
 * @author: SKKUASSA
 */


ASSA3d.Scene = function(){
	
	this.lights = [];
	this.objs = [];
};

ASSA3d.Scene.prototype = {
	constructor: ASSA3d.Scene,
	
	add: function( obj ){
		if(obj instanceof ASSA3d.Light){
			this.lights.push(obj);
		}else{
			this.objs.push(obj);
		}
	},
	
}; 