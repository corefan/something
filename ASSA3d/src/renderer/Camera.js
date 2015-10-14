

/*
 * @author: SKKUASSA
 */

ASSA3d.Camera = function(fov,aspect,near,far){
	
	ASSA3d.LC.call(this);
	
	this.fov = fov || 45.0;
	this.aspect = aspect || 1.0;
	
	this.near = near || 0.1;
	this.far = far || 1000;
	
	
	
};

// 프로토타입 상속
ASSA3d.Camera.prototype = new ASSA3d.LC();
ASSA3d.Camera.prototype.constructor = ASSA3d.Camera;



